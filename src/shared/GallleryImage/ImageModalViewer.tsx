import { Modal, Button } from "react-bootstrap";

interface Props {
  src?: string;
  show: boolean;
  onClose: () => void;
}

export default function ImageModalViewer({ src, show, onClose }: Props) {
  return (
    <Modal show={show} onHide={onClose} centered size="lg">
      <Modal.Body className="p-3 d-flex justify-content-center align-items-center">
        {src && (
          <img
            src={src}
            alt="Imagem ampliada"
            className="img-fluid"
            style={{ objectFit: "contain", maxHeight: "80vh" }}
          />
        )}
      </Modal.Body>
      <Modal.Footer className="py-2">
        <Button variant="secondary" size="sm" onClick={onClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
