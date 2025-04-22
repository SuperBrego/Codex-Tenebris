import { Modal, Button, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Character } from "../../classes/Character";
import { formBonuses, formText, FormType } from "../../Utils/werewolfFormsData";

interface Props {
  form: FormType;
  character: Character;
  activeForm: FormType;
  onClose: () => void;
}

export function FormDetailsModal({ form, character, activeForm, onClose }: Props) {
  const { t } = useTranslation();

  return (
    <Modal show centered onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{form.toUpperCase()} – {t('details')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="text-center mb-2">
          <Col><b>{t('attribute')}</b></Col>
          <Col><b>{t('bonus')}</b></Col>
          <Col><b>{t('total')}</b></Col>
        </Row>
        {Object.entries(formBonuses[form])
          .filter(([_, value]) => value !== 0)
          .map(([key, value]) => (
            <Row key={key} className="mb-2 text-center align-items-center">
              <Col>{t(key)}</Col>
              <Col>{value > 0 ? `+${value}` : value}</Col>
              <Col>
                {key !== 'perception'
                  ? (character.getAttribute(key) as number) + (activeForm === form ? 0 : value)
                  : (character.getAttribute('wits') as number) +
                    (character.getAttribute('composure') as number) +
                    (activeForm === form ? 0 : value)}
              </Col>
            </Row>
          ))}
        <hr />
        <pre style={{ whiteSpace: 'pre-wrap', textAlign: 'center' }}>
          {formText[form]}
        </pre>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          {t('close')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
