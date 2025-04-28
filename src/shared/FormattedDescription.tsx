// FormattedDescriptionRenderer.tsx
import { parseFormattedDescription } from "../Utils/FormattedDescriptionParser";

interface Props {
  description: string;
}

export default function FormattedDescriptionRenderer({ description }: Props) {
  const blocks = parseFormattedDescription(description);

  return (
    <div className="formatted-description">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "powerTitle":
            return (
              <div key={index}>
                {index !== 0 && <hr className="my-4" />}
                <h2 className="mt-4 mb-3">{block.text}</h2>
              </div>
            );
          case "sectionTitle":
            return (
              <h3 key={index} className="mt-4 mb-3">
                {block.text}
              </h3>
            );
          case "paragraph":
            return (
              <p key={index} className="mb-2">
                {highlightParagraph(block.text)}
              </p>
            );
          case "table":
            return (
              <table key={index} className="table table-sm table-bordered align-middle mt-3 mb-3">
                <thead className="table-light">
                  <tr>
                    <th style={{ width: "10rem" }}>Resultado</th>
                    <th>Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, idx) => (
                    <RowSimple key={idx} row={row} />
                  ))}
                </tbody>
              </table>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

function highlightParagraph(text: string) {
  const recognizedTitles = [
    "Cost", "Dice Pool", "Action", "Duration",
    "Custo", "Reservatório de Dados", "Ação", "Duração",
    "Pré-Requisitos", "Pré-Requisito", "Efeitos", "Efeito",
    "Desvantagem", "Desvantagens",
    "Prerequisite", "Prerequisites", "Effect", "Effects",
    "Drawback", "Drawbacks"
  ];

  const match = recognizedTitles.find(title =>
    text.toLowerCase().startsWith(title.toLowerCase() + ":")
  );
  if (match) {
    const [title, ...rest] = text.split(":");
    return (
      <>
        <strong>{title.trim()}:</strong> {rest.join(":").trim()}
      </>
    );
  }

  return text;
}

function RowSimple({ row }: { row: { result: string; content: string; subitems?: string[] } }) {
  return (
    <tr>
      <td style={{ paddingRight: "1rem", whiteSpace: "nowrap" }}>
        <strong>{row.result}</strong>
      </td>
      <td>
        <div>{row.content}</div>
        {row.subitems && (
          <ul className="mt-2 mb-0 ps-4">
            {row.subitems.map((sub, idx) => (
              <li key={idx} className="mb-1">{sub}</li>
            ))}
          </ul>
        )}
      </td>
    </tr>
  );
}
