import { ReactElement } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useCharacter } from "../../hooks/useCharacter";
import { PersonalInfo } from "../../interfaces/PersonalInfo";
import { useTranslation } from "react-i18next";

export default function DescriptionTraits(): ReactElement {
  const { character, updateCharacter } = useCharacter();
  const { t } = useTranslation();

  const personalInfoLabels: Record<keyof PersonalInfo, string> = {
    dateofBirth: character.personalInfo.dateofBirth,
    hair: character.personalInfo.hair,
    eyes: character.personalInfo.eyes,
    race: character.personalInfo.race,
    nationality: character.personalInfo.nationality,
    height: character.personalInfo.height,
    weight: character.personalInfo.weight,
    sex: character.personalInfo.sex,
    gender: character.personalInfo.gender,
    physicalDescription: character.personalInfo.physicalDescription,
  };

  const onChange = (key: string, value: string) => {
    updateCharacter({ personalInfo: { ...character.personalInfo, [key]: value }});
  }

  return <>
    <Col>
      <Card>
        <Card.Body>
          {Object.entries(personalInfoLabels)
          .filter(([key]) => key !== "physicalDescription")
          .map(([key]) => (
            <Form.Group className="mb-2" key={key}>
              <Row>
                <Col>
                  <Form.Label>{t(key)}</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    size="sm"
                    className="w-75"
                    value={character.personalInfo[key as keyof PersonalInfo]}
                    onChange={(e) => onChange(key as keyof PersonalInfo, e.target.value)}
                  />
                </Col>
              </Row>
            </Form.Group>
          ))}
        </Card.Body>
      </Card>
    </Col>
  </>
}