import { ReactElement } from "react";
import DescriptionTraits from "../Personal/DescriptionTraits";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useCharacter } from "../../hooks/useCharacter";
import { useTheme } from "../../context/ThemeContext";

export default function PersonalInfoSection(): ReactElement {
  const { character, updateCharacter } = useCharacter();
  const { colors } = useTheme();
  const { t } = useTranslation();

  const onChange = (key: string, value: string) => {
    updateCharacter({ personalInfo: { ...character.personalInfo, [key]: value }});
  }

  return <>
    <Card>
      <Card.Header style={{ backgroundColor: colors.primary, color: colors.primaryText }} className="fw-bold">
        {t('description')}
      </Card.Header>
      <Card.Body>
        <Row>
        {/* Descrição */}
        <DescriptionTraits />

        <Col>
          <Card>
            <Card.Header style={{ backgroundColor: colors.primary, color: colors.primaryText }}>
              {t('physicalDescription')}
            </Card.Header>
            <Card.Body>
              <Form.Control
                type="text"
                as={'textarea'}
                rows={10}
                placeholder={`${t('characterDescription')}...`}
                className="w-100"
                value={character.personalInfo['physicalDescription']}
                onChange={(e) => onChange('physicalDescription', e.target.value)}
              />
            </Card.Body>
          </Card>
        </Col>
        
        {/* História */}
        <Col>
          <Card>
            <Card.Header style={{ backgroundColor: colors.primary, color: colors.primaryText }}>
              {t('story')}
            </Card.Header>
            <Card.Body>
              <Form.Control
                type="text"
                as={'textarea'}
                rows={10}
                placeholder={`${t('characterStory')}...`}
                className="w-100"
                value={character.story}
                onChange={(e) => updateCharacter({ story: e.target.value })}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Aliados e NPCs */}
      </Card.Body>
    </Card>
  </>;
}