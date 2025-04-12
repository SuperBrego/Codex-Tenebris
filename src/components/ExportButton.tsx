import { useState } from "react";
import { Button, Modal, Stack, ListGroup } from "react-bootstrap";
import { Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { useCharacter } from "../hooks/useCharacter";
import { characterToBBCode, downloadFile } from "../Utils/Export";


export default function ExportButton() {
  const { character } = useCharacter();
  const { t } = useTranslation();
  const { colors } = useTheme();

  const [show, setShow] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<"json" | "bbcode">("json");

  const exportContent = {
    json: JSON.stringify(character, null, 2),
    bbcode: characterToBBCode(character, t)
  };

  const handleDownload = () => {
    const filename = `${character.name || "personagem"}.${selectedFormat === "json" ? "json" : "txt"}`;
    const content = exportContent[selectedFormat];
    const mime = selectedFormat === "json" ? "application/json" : "text/plain";
    downloadFile(content, filename, mime);

  };

  return (
    <>
      <Button
        style={{
          backgroundColor: colors.background,
          borderColor: colors.border
        }}
        size="sm"
        onClick={() => setShow(true)}
      >
        <Download size={16} className="me-1" />
        {t("export")}
      </Button>

      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{t("exportOptions")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack direction="horizontal" gap={4}>
            <ListGroup style={{ minWidth: "200px" }}>
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
            </ListGroup>

            <div style={{ flex: 1, maxHeight: "60vh", overflowY: "auto", whiteSpace: "pre-wrap" }}>
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
