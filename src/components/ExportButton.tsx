import { useState } from "react";
import { Button, Modal, Stack, ListGroup, Form } from "react-bootstrap";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useCharacter } from "../hooks/useCharacter";
import { usePortfolio } from "../hooks/usePortfolio";
import { characterToBBCode, downloadFile } from "../Utils/Export";

export default function ExportButton() {
  const { character } = useCharacter();
  const { portfolio } = usePortfolio();
  const { t } = useTranslation();

  const [show, setShow] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<"json" | "bbcode">("json");
  const [scope, setScope] = useState<"current" | "selected" | "all">("current");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleSelection = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const charactersToExport = scope === "all"
    ? portfolio.characters
    : scope === "selected"
      ? portfolio.characters.filter(c => selectedIds.includes(c.id))
      : [character];

  const exportContent = {
    json: JSON.stringify({
      characters: charactersToExport,
      activeId: character.id
    }, null, 2),

    bbcode: charactersToExport
      .map(c => `[b]${c.name}[/b]\n\n${characterToBBCode(c, t)}`)
      .join("\n\n" + "-".repeat(30) + "\n\n")
  };

  const handleDownload = () => {
    const filename =
      scope === "all"
        ? `portfolio.${selectedFormat === "json" ? "json" : "txt"}`
        : scope === "selected"
          ? `selecionados.${selectedFormat === "json" ? "json" : "txt"}`
          : `${character.name || "personagem"}.${selectedFormat === "json" ? "json" : "txt"}`;

    const content = exportContent[selectedFormat];
    const mime = selectedFormat === "json" ? "application/json" : "text/plain";
    downloadFile(content, filename, mime);
  };

  return (
    <>
      <Button variant="outline-primary" size="sm" onClick={() => setShow(true)} >
        <Download size={16} className="me-1" />
        {t("export")}
      </Button>

      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{t("exportOptions")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack direction="horizontal" gap={4}>
            <ListGroup style={{ minWidth: "220px" }}>
              <ListGroup.Item
                action
                active={selectedFormat === "json"}
                onClick={() => setSelectedFormat("json")}
              >
                JSON
              </ListGroup.Item>
              <ListGroup.Item
                action
                active={selectedFormat === "bbcode"}
                onClick={() => setSelectedFormat("bbcode")}
              >
                BBCode
              </ListGroup.Item>

              <hr />

              <Form.Check
                type="radio"
                label={t("currentCharacter")}
                checked={scope === "current"}
                onChange={() => setScope("current")}
              />
              <Form.Check
                type="radio"
                label={t("selectedCharacters")}
                checked={scope === "selected"}
                onChange={() => setScope("selected")}
              />
              <Form.Check
                type="radio"
                label={t("entirePortfolio")}
                checked={scope === "all"}
                onChange={() => setScope("all")}
              />

              {scope === "selected" && (
                <div style={{ marginTop: "1rem", paddingLeft: "0.5rem" }}>
                  {portfolio.characters.map(c => (
                    <Form.Check
                      key={c.id}
                      type="checkbox"
                      label={c.name}
                      checked={selectedIds.includes(c.id)}
                      onChange={() => toggleSelection(c.id)}
                    />
                  ))}
                </div>
              )}
            </ListGroup>

            <div 
              className="border-start border-1 rounded p-2"
              style={{ flex: 1, maxHeight: "60vh", overflowY: "auto", whiteSpace: "pre-wrap", backgroundColor: "lightgray" }}
            >
              <code>{exportContent[selectedFormat]}</code>
            </div>
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleDownload}>
            {t("download")} .{selectedFormat === "json" ? "json" : "txt"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
