import { ReactElement } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { Armor } from "../../interfaces/Equipments/Armor";
import { useCharacter } from "../../hooks/useCharacter";
import { useTranslation } from "react-i18next";

interface Props {
  armor: Armor;
  onChange: (value: string, trait: string, type: string) => void;
}

export default function ArmorTraits({ armor, onChange }: Props): ReactElement {
  const { character, updateCharacter } = useCharacter();
  const { t } = useTranslation();

  const handleEquipArmor = (isEquiped: boolean) => {
    const updated: Armor = {...armor, equiped: isEquiped};

    const updatedEquips = character.equipments.map(equip => (equip.id === updated.id) ? updated : equip);
    updateCharacter({ equipments: updatedEquips });
  }
  
  return <>
    {/* Nome | Valor Geral/Valor Balístico | Força | Defesa | Tamanho | Custo */}
    
    <Row className="mb-1">
      {/* Valor Geral/Balístico */}
      <Col md={2} className="d-flex justify-content-center fw-bold">
        <div>{t('general')}/{t('ballistic')}</div>
      </Col>
      
      {/* Força */}
      <Col className="d-flex justify-content-center fw-bold">
        <div>{t('strength')}</div>
      </Col>
      
      {/* Defesa */}
      <Col className="d-flex justify-content-center fw-bold">
        <div>{t('defense')}</div>
      </Col>
      
      {/* Tamanho */}
      <Col className="d-flex justify-content-center fw-bold">
        <div>{t('size')}</div>
      </Col>
      
      {/* Custo */}
      <Col className="d-flex justify-content-center fw-bold">
        <div>{t('cost')}</div>
      </Col>
      
      {/* Equipado? */}
      <Col className="d-flex justify-content-center fw-bold">
        <div>{t('equipped')}?</div>
      </Col>
    </Row>

    <Row className="mb-1">
      {/* Valor Geral/Balístico */}
      <Col md={2} className="d-flex justify-content-center">
        <InputGroup>
          <Form.Control 
            className="text-center"
            value={armor.generalRating}
            size="sm"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value, 'generalRating', 'number')}
          />
          <InputGroupText>/</InputGroupText>
          <Form.Control 
            className="text-center"
            value={armor.ballisticRating}
            size="sm"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value, 'ballisticRating', 'number')}
          />
        </InputGroup>
      </Col>
      
      {/* Força */}
      <Col className="d-flex justify-content-center">
        <Form.Control 
          value={armor.strength}
          size="sm"
          style={{ width: '3rem', textAlign: 'center'}}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value, 'init', 'number')}
        />
      </Col>
      
      {/* Defesa */}
      <Col className="d-flex justify-content-center">
        <Form.Control 
          value={armor.defense}
          size="sm"
          style={{ width: '3rem', textAlign: 'center'}}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value, 'strength', 'number')}
        />
      </Col>
      
      {/* Tamanho */}
      <Col className="d-flex justify-content-center">
        <Form.Control 
          value={armor.size}
          size="sm"
          style={{ width: '3rem', textAlign: 'center'}}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value, 'size', 'number')}
        />
      </Col>
      
      {/* Custo */}
      <Col className="d-flex justify-content-center">
        <Form.Control 
          value={armor.cost}
          size="sm"
          style={{ width: '3rem', textAlign: 'center'}}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value, 'cost', 'number')}
        />
      </Col>
      
      {/* Equipado? */}
      <Col className="d-flex justify-content-center">
        <Form.Switch
          checked={armor.equiped}
          style={{ width: '3rem', textAlign: 'center'}}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleEquipArmor(e.target.checked)}
        />
      </Col>
    </Row>
  </>
}