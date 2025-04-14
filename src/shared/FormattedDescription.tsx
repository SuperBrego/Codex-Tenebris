import React from "react";

interface Props {
  description: string;
}

export default function FormattedDescription({ description }: Props) {
  const lines = description.split("\n").map(line => line.trim()).filter(Boolean);

  const output: React.ReactNode[] = [];
  let inLevelBlock = false;
  const levelRows: React.ReactNode[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detecta início de bloco de tabela de níveis
    if (/^Nível\s+Descrição$/i.test(line)) {
      inLevelBlock = true;
      levelRows.length = 0; // limpa qualquer anterior
      continue;
    }

    // Linhas com nível e descrição
    if (inLevelBlock && /^•{1,5}\s+/.test(line)) {
      const match = line.match(/^(•{1,5})\s+(.*)/);
      if (match) {
        levelRows.push(
          <tr key={`row-${i}`}>
            <td style={{ paddingRight: "1rem", whiteSpace: "nowrap" }}>
              <strong>{match[1]}</strong>
            </td>
            <td>
              {match[2].includes(":") ? (
                <>
                  <strong>{match[2].split(":")[0]}:</strong>{" "}
                  {match[2].split(":").slice(1).join(":").trim()}
                </>
              ) 
              : (match[2])}
            </td>
          </tr>
        );
      }
      continue;
    }

    // Sai do bloco de níveis quando encontra linha "normal"
    if (inLevelBlock && !/^•{1,5}\s+/.test(line)) {
      inLevelBlock = false;
      output.push(
        <table key={`table-${i}`} className="table table-sm align-middle">
          <thead>
            <tr>
              <th style={{ width: "5rem" }}>Nível</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>{levelRows}</tbody>
        </table>
      );
      levelRows.length = 0;
    }

    // Linhas de título com "Efeitos:", "Pré-Requisitos:" etc.
    if (/^(Pré-Requisitos|Pré-Requisito|Efeitos|Desvantagens|Nível.*Descrição):?/i.test(line)) {
      const [title, ...rest] = line.split(":");
      output.push(
        <p key={`title-${i}`}>
          <strong>{title}:</strong> {rest.join(":").trim()}
        </p>
      );
      continue;
    }

    // Linhas normais
    output.push(<p key={`line-${i}`}>{line}</p>);
  }

  // Caso tenha uma tabela pendente no fim
  if (levelRows.length > 0) {
    output.push(
      <table key={`table-end`} className="table table-sm align-middle">
        <thead>
          <tr>
            <th style={{ width: "5rem" }}>Nível</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>{levelRows}</tbody>
      </table>
    );
  }

  return <div className="formatted-description">{output}</div>;
}
