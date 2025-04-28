// FormattedDescriptionParser.ts
export type Block =
  | { type: "powerTitle"; text: string }
  | { type: "sectionTitle"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "table"; rows: { result: string; content: string; subitems?: string[] }[] };

export function parseFormattedDescription(description: string): Block[] {
  const lines = description.split("\n").map(l => l.trim()).filter(Boolean);
  const blocks: Block[] = [];
  let currentTable: { result: string; content: string; subitems?: string[] }[] = [];
  let inRollResults = false;
  let lastRow: { result: string; content: string; subitems?: string[] } | null = null;

  for (const line of lines) {
    if (/\(•{1,5}\)$/.test(line)) {
      if (currentTable.length > 0) {
        blocks.push({ type: "table", rows: currentTable });
        currentTable = [];
      }
      blocks.push({ type: "powerTitle", text: line });
      continue;
    }

    if (/^(Roll Results|Resultados da Rolagem)$/i.test(line)) {
      if (currentTable.length > 0) {
        blocks.push({ type: "table", rows: currentTable });
        currentTable = [];
      }
      blocks.push({ type: "sectionTitle", text: line });
      inRollResults = true;
      continue;
    }

    if (inRollResults && /^•{1,5}\s+/.test(line)) {
      const match = line.match(/^(•{1,5})\s+(.*)/);
      if (match) {
        const text = match[2];
        if (text.includes(":") && !text.startsWith("The ")) {
          // Novo resultado principal (mas ignora se for "The ..." para textos grandes)
          const [result, ...rest] = text.split(":");
          lastRow = { result: result.trim(), content: rest.join(":").trim() };
          currentTable.push(lastRow);
        } else {
          // Subopção dentro do último resultado
          if (lastRow) {
            if (!lastRow.subitems) {
              lastRow.subitems = [];
            }
            lastRow.subitems.push(text);
          }
        }
      }
      continue;
    }

    if (inRollResults && !/^•{1,5}\s+/.test(line)) {
      if (currentTable.length > 0) {
        blocks.push({ type: "table", rows: currentTable });
        currentTable = [];
      }
      inRollResults = false;
    }

    blocks.push({ type: "paragraph", text: line });
  }

  if (currentTable.length > 0) {
    blocks.push({ type: "table", rows: currentTable });
  }

  return blocks;
}
