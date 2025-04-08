import { OverlayTrigger, Popover, Modal, Button } from "react-bootstrap";
import { useState } from "react";
import FormattedDescription from "./FormattedDescription";
import { BadgeInfo } from "lucide-react";

interface Props {
  description: string;
}

export default function MeritTooltip({ description }: Props) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const popover = (
    <Popover id="merit-description-popover">
      <Popover.Header as="h3" className="d-flex justify-content-between align-items-center">
        <span>Descrição</span>
        <Button variant="link" size="sm" className="p-0" onClick={handleShow}>
          Ver maior
        </Button>
      </Popover.Header>
      <Popover.Body style={{ maxWidth: "400px", maxHeight: "300px", overflowY: "auto" }}>
        <FormattedDescription description={description} />
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <OverlayTrigger trigger="click" placement="auto" overlay={popover} rootClose>
        <span role="button" className="ms-2 text-muted" title="Ver descrição">
          <BadgeInfo />
        </span>
      </OverlayTrigger>

      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Descrição completa</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: "70vh", overflowY: "auto" }}>
          <FormattedDescription description={description} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
