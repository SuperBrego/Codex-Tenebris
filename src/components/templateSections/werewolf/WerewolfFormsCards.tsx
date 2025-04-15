import { Card, Col, Row } from "react-bootstrap";
import { useCharacter } from "../../../hooks/useCharacter";
import { useTranslation } from "react-i18next";
import { WerewolfTraits } from "../../../interfaces/templates/WerewolfTraits";
import { useTheme } from "../../../context/ThemeContext";
import { SupernaturalTemplatesIDs } from "../../../enum/SupernaturalTemplates";

interface FormBonuses {
  size: number;
  strength: number;
  stamina: number;
  dexterity: number;
  manipulation: number;
  initiative: number;
  speed: number;
  armor: number;
  perception: number;
}

const FORMS = ['hishu', 'dalu', 'gauru', 'urshul', 'urhan'] as const;

const formBonuses: Record<'hishu' | 'dalu' | 'gauru' | 'urshul' | 'urhan', FormBonuses> = {
  hishu:  { strength: 0, dexterity: 0, stamina: 0, manipulation: 0,  size: 0,  speed: 0, initiative: 0, armor: 0, perception: 1 },
  dalu:   { strength: 1, dexterity: 0, stamina: 1, manipulation: -1, size: 1,  speed: 1, initiative: 0, armor: 0, perception: 2 },
  gauru:  { strength: 3, dexterity: 1, stamina: 2, manipulation: 0,  size: 2,  speed: 4, initiative: 1, armor: 0, perception: 3 }, 
  urshul: { strength: 2, dexterity: 2, stamina: 2, manipulation: -1, size: 1,  speed: 7, initiative: 2, armor: 0, perception: 3 },
  urhan:  { strength: 0, dexterity: 2, stamina: 1, manipulation: -1, size: -1, speed: 5, initiative: 0, armor: 0, perception: 4 }
}
const formText: Record<'hishu' | 'dalu' | 'gauru' | 'urshul' | 'urhan', string> ={
  hishu:  `Pele de Cordeiro`,
  dalu:   `
    Dentes/Garras +OL \n
    Defensa vs. Armas de fogo \n
    Aluamento Leve\n
    Cão Chupando Manga
  `,
  gauru:  `
    Dentes/Garras +2L \n
    (Iniciativa +3) \n
    Defensa vs. Armas de fogo \n
    Aluamento Total \n
    Regeneração \n
    Fúria\n
    Terror Primitivo
  `,
  urshul: `
    Dentes +2L/Garras +1L \n
    Defensa vs. Armas de fogo\n
    Aluamento Moderado\n
    Abater a Presa
  `,
  urhan:  `
    Dentes +1L\n
    Perseguição
  `,
}

export default function WerewolfForms() {
  const { character, updateCharacter } = useCharacter();
  const { t } = useTranslation();
  const { colors } = useTheme();

  const activeForm = (character.templateTraits as WerewolfTraits).activeForm;

  const handleChangeForm = (form: typeof FORMS[number]) => {
    updateCharacter({
      templateTraits: {
        ...character.templateTraits,
        activeForm: form,
      },
    });
  };

  if(character.template !== SupernaturalTemplatesIDs.Werewolf) return <></>;

  return (
    <Card>
      <Card.Header> {t('forms')} </Card.Header>
      <Card.Body>
        <Row className="g-3 justify-content-between">
        {FORMS.map((form) => (
          <Col key={form} xs={12} md={6} lg={4} xl={2}>
            <Card
              onClick={() => handleChangeForm(form)}
              className={`h-100 w-100 selectable-card ${
                activeForm === form ? 'border-3 shadow' : 'border-secondary'
              }`}
              style={{
                borderColor: activeForm === form ? colors.accent : '#ccc',
                cursor: 'pointer',
                transition: '0.2s',
              }}
            >
              <Card.Header className="d-flex justify-content-between align-items-center">
                {form.toUpperCase()}
                {activeForm === form && (
                  <span className="badge" style={{ backgroundColor: colors.accent }}>{t('active')}</span>
                )}
              </Card.Header>

              <Card.Body
                className="py-3"
                style={{ fontSize: '0.9rem', minHeight: '280px' }}
              >
                <Row className="text-center mb-2 d-none d-md-flex">
                  <Col><b>{t('attribute')}</b></Col>
                  <Col><b>{t('bonus')}</b></Col>
                  <Col><b>{t('total')}</b></Col>
                </Row>

                {Object.entries(formBonuses[form])
                  .filter(([_, value]) => value !== 0)
                  .map(([key, value]) => (
                    <Row key={key} className="mb-1 align-items-center text-center">
                      <Col xs={12} md={4} className="text-start">{t(key)}</Col>
                      <Col xs={12} md={4}>{value > 0 ? `+${value}` : value}</Col>
                      <Col xs={12} md={4}>
                        {key !== 'perception'
                          ? character.getAttribute(key)
                          : character.getAttribute('wits') + character.getAttribute('composure')}
                      </Col>
                    </Row>
                  ))}

                <p style={{ whiteSpace: 'pre-wrap', textAlign: 'center' }}>
                  {formText[form]}
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Card.Body>
    </Card>
  );
}
