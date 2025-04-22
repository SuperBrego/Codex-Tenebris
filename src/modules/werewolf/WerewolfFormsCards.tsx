import { Card, Col, Row, Button } from "react-bootstrap";
import { useState } from "react";
import { useCharacter } from "../../hooks/useCharacter";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import { SupernaturalTemplatesIDs } from "../../enum/SupernaturalTemplates";
import { FORMS, formShortDescriptions, FormType } from "../../Utils/werewolfFormsData";
import { FormDetailsModal } from "./FormDetailsModal";
import { WerewolfTraits } from "../../interfaces/templates/WerewolfTraits";

export default function WerewolfForms() {
  const { character, updateCharacter } = useCharacter();
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [modalForm, setModalForm] = useState<FormType | null>(null);

  if (character.template !== SupernaturalTemplatesIDs.Werewolf) return null;

  const currentForm = (character.templateTraits as WerewolfTraits).activeForm || 'hishu';

  const handleChangeForm = (form: FormType) => {
    if (form === currentForm) return;
    updateCharacter({
      templateTraits: {
        ...character.templateTraits,
        activeForm: form,
      },
    });
  };

  return (
    <>
      <Card>
        <Card.Header>{t('forms')}</Card.Header>
        <Card.Body>
          <Row className="g-3 justify-content-between">
            {FORMS.map((form) => (
              <Col key={form} xs={12} md={6} lg={4} xl={2}>
                <Card
                  className={`h-100 w-100 selectable-card ${currentForm === form ? 'border-3 shadow' : 'border-secondary'}`}
                  style={{
                    borderColor: currentForm === form ? colors.accent : '#ccc',
                    cursor: 'pointer',
                    transition: '0.2s',
                  }}
                  onClick={() => handleChangeForm(form)}
                >
                  <Card.Header className="d-flex justify-content-between align-items-center">
                    {form.toUpperCase()}
                    {currentForm === form && (
                      <span className="badge" style={{ backgroundColor: colors.accent }}>
                        {t('active')}
                      </span>
                    )}
                  </Card.Header>
                  <Card.Body className="text-center d-flex flex-column justify-content-center">
                    <div style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>
                      {formShortDescriptions[form]}
                    </div>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="mt-3"
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalForm(form);
                      }}
                    >
                      {t('viewDetails')}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {modalForm && (
        <FormDetailsModal
          form={modalForm}
          character={character}
          activeForm={currentForm}
          onClose={() => setModalForm(null)}
        />
      )}
    </>
  );
}
