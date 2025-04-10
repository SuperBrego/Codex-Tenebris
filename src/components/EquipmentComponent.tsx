import { ReactElement } from "react";
import { EquipmentTypes } from "../types/EquipmentTypes";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Armor, Weapon } from "../interfaces/Equipment";
import WeaponTraits from "./Equipments/WeaponTraits";
import { useCharacter } from "../hooks/useCharacter";
import { Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import ArmorTraits from "./Equipments/ArmorTraits";

interface Props {
  equipment: EquipmentTypes;
  onRemove: (id: string) => void;
}

export default function EquipmentComponent({ equipment, onRemove }: Props): ReactElement {
  const { character, updateCharacter } = useCharacter();
  const { t } = useTranslation();
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value ?? 'Equipamento...';
    const updated = equipment;
    updated.name = newName;

    const updatedEquips = character.equipments.map(equip => (equip.id === updated.id) ? updated : equip);
    updateCharacter({ equipments: updatedEquips });
  }

  const handleTraitChange = (value: string, trait: string, type: string) => {
    const newTrait = (type === 'number') ? Number(value) : value;
    const updated = {...equipment, [trait]: newTrait};

    const updatedEquips = character.equipments.map(equip => (equip.id === updated.id) ? updated : equip);
    updateCharacter({ equipments: updatedEquips });
  }

  return <>
  <Container fluid className="mt-2 mb-2 border border-5 p-2 rounded">
    <Row>
      <Col md={11} className="mb-2">
        <Form.Control 
          placeholder="Nome..."
          value={equipment.name}
          onChange={handleNameChange}
          size="sm"
        />
      </Col>
      
      <Col className="d-flex justify-content-center">
        <button className="btn btn-outline-danger" onClick={() => onRemove(equipment.id)}>
          <Trash2 size={18} />
        </button>
      </Col>
      
      <Col>
        {/* Armas */}
        {(equipment.type === 'weapon') && <WeaponTraits weapon={equipment as Weapon} onChange={handleTraitChange} />}
        
        {/* Armaduras */}
        {(equipment.type === 'armor') && <ArmorTraits armor={equipment as Armor} onChange={handleTraitChange} />}

        {/* Geral */}
      </Col>
    </Row>

    {/* Descrição */}
    <Row className="mb-2">
      {/* Campo de Descrição */}
      <Col>
        <Form.Control
          as={'textarea'}
          value={equipment.description}
          placeholder={`${t('equipmentDescription')}...`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTraitChange(e.target.value, 'description', 'text')}
        />
      </Col>
    </Row>
  </Container>
  
  {/* Geral */}
  {/* Nome | Durabilidade | Estrutura | Tamanho | Custo */}

  </>;
}