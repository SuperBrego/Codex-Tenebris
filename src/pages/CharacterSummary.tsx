import { Card, Row, Col, Badge } from 'react-bootstrap';
import { useCharacter } from '../hooks/useCharacter';
import { useTranslation } from 'react-i18next';

export default function CharacterSummary() {
  const { character } = useCharacter();
  const { t } = useTranslation();

  const attributes = Object.entries(character.attributes).flatMap(([_, traits]) => traits);
  const skills = Object.entries(character.skills).flatMap(([_, traits]) => traits);

  const mainAttributes = ['strength', 'dexterity', 'stamina', 'intelligence', 'wits', 'resolve'];

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Header className="fw-bold text-uppercase">{character.name || 'Sem Nome'}</Card.Header>
      <Card.Body>
        <Row className="mb-2">
          <Col><strong>{t('template')}:</strong> {t(character.templateTraits.name)}</Col>
          <Col><strong>{t('age')}:</strong> {character.age}</Col>
          <Col><strong>{t('player')}:</strong> {character.player}</Col>
        </Row>

        <h6 className="text-uppercase">{t('attributes')}</h6>
        <Row className="mb-3">
          {attributes
            .filter(attr => mainAttributes.includes(attr.name))
            .map(attr => (
              <Col xs={6} md={4} key={attr.name}>
                <strong>{t(attr.labelKey)}:</strong> {attr.value}
              </Col>
            ))}
        </Row>

        <h6 className="text-uppercase">{t('skills')}</h6>
        {skills.some(s => s.value > 0) 
        ? <Row>
          {skills
            .filter(skill => skill.value > 0)
            .sort((a, b) => t(a.labelKey).localeCompare(t(b.labelKey)))
            .map(skill => (
              <Col md={6} key={skill.name} className="mb-2">
                <div>
                  <strong>{t(skill.labelKey)}:</strong> {skill.value}
                  {skill.specialties && (
                    <div className="text-muted small">
                      <Badge bg="secondary">{skill.specialties}</Badge>
                    </div>
                  )}
                </div>
              </Col>
            ))}
        </Row>
        : <p className="text-muted">{t('noSkills')}.</p>}
        
      </Card.Body>
    </Card>
  );
}
