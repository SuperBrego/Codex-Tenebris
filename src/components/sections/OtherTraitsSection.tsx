import { ReactElement } from "react";
import { Card, Col, Form, Row, Stack } from "react-bootstrap";
import { useCharacter } from "../../hooks/useCharacter";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";

export default function OtherTraitsSection(): ReactElement {
  const { character, updateCharacter } = useCharacter();
  const { t } = useTranslation();
  const { colors } = useTheme();

  const handleBeatCheck = (isChecked: boolean, index: number) => {
    const newBeats = character.beats;
    newBeats[index] = isChecked;
    updateCharacter( { beats: newBeats } )
  }

  return <>
  <Card >
    <Card.Header style={{ backgroundColor: colors.primary, color: colors.primaryText }}> 
      <span className="fw-bold text-center"> {t('otherTraits')} </span>
    </Card.Header>
    <Card.Body>
      
      {/* Tamanho */}
      <Form.Group as={Row} >
        <Form.Label column> <strong>{t('size')}:</strong> </Form.Label>
        <Form.Label column> {character.size} </Form.Label>
        <Col />
      </Form.Group>
      
      {/* Velocidade */}
      <Form.Group as={Row} >
        <Form.Label column> <strong>{t('speed')}:</strong> </Form.Label>
        <Form.Label column> {character.speed} </Form.Label>
        <Col> 
          <Form.Control placeholder={`${t('otherBonus')}...`} />
        </Col>
      </Form.Group>
      
      {/* Defesa */}
      <Form.Group as={Row} >
        <Form.Label column> <strong>{t('defense')}:</strong> </Form.Label>
        <Form.Label column> {character.defense} </Form.Label>
        <Col> 
          <Form.Control placeholder={`${t('otherBonus')}...`} />
        </Col>
      </Form.Group>
      
      {/* Armadura */}
      <Form.Group as={Row} >
        <Form.Label column> <strong>{t('armor')}:</strong> </Form.Label>
        <Form.Label column> {character.armor} </Form.Label>
        <Col> 
          <Form.Control placeholder={`${t('otherBonus')}...`} />
        </Col>
      </Form.Group>
      
      {/* Modificador de Iniciativa */}
      <Form.Group as={Row} >
        <Form.Label column> <strong>{t('initiative')}:</strong> </Form.Label>
        <Form.Label column> {character.initiative} </Form.Label>
        <Col> 
          <Form.Control placeholder={`${t('otherBonus')}...`} />
        </Col>
      </Form.Group>

      {/* Atos */}
      <Form.Group as={Row} >
        <Form.Label column> <strong>{t('beats')}:</strong> </Form.Label>
        <Col>
          <Stack direction="horizontal">
            {character.beats.map((beat, index) => 
              <Form.Check
                type="checkbox"
                key={`beat-check-${index}`}
                checked={beat}
                onChange={(e: any) => handleBeatCheck(e.target.checked, index)}
              />)
            }
          </Stack>
        </Col>
        <Col />    
      </Form.Group>
      
      {/* Experiência */}
      <Form.Group as={Row} >
        <Form.Label column> <strong>{t('experience')}:</strong> </Form.Label>
        <Col>
          <Form.Control
            size="sm"
            className="w-50 text-center"
            type="number"
            min={0}
            value={character.experience}
            placeholder={`${t('otherBonus')}...`}
            onChange={(e: any) => updateCharacter({ experience: Number(e.target.value) })}
          />
        </Col>
        <Col />
      </Form.Group>
    </Card.Body>
  </Card>
  </>;
}