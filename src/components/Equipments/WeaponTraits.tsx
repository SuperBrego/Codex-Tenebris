import { ReactElement, useEffect, useState } from "react";
import { Weapon } from "../../interfaces/Equipment";
import { Col, Form, OverlayTrigger, Row, Stack, Tooltip } from "react-bootstrap";
import { MessageCircleQuestion } from "lucide-react";

interface Props {
  weapon: Weapon;
  onChange: (value: string, trait: string, type: string) => void;
}

export default function WeaponTraits({ weapon, onChange }: Props): ReactElement {
  const [closeRange, setCloseRange] = useState<string>(weapon.range.split('/')[0] ?? '');
  const [mediumRange, setMediumRange] = useState<string>(weapon.range.split('/')[1] ?? '');
  const [longRange, setLongRange] = useState<string>(weapon.range.split('/')[2] ?? '');

  useEffect(() => {
    const parts = [closeRange, mediumRange, longRange].filter(part => part !== '');
    const range = parts.join('/');
    onChange(range, 'range', 'text');
  }, [closeRange, mediumRange, longRange]);

  return <>
    {/* Nome | Dano | Alcance | Clipe | Iniciativa | Força | Tamanho | Custo */}
    
    <Row className="mb-1">
      {/* Dano */}
      <Col className="d-flex justify-content-center fw-bold">
        <div>Dano</div>
      </Col>
      
      {/* Alcance */}
      <Col md={3} className="d-flex justify-content-center fw-bold">
        <div>
          <OverlayTrigger placement="top" overlay={<Tooltip>(Perto/Médio/Longe)</Tooltip>}>
            <div>Alcance <MessageCircleQuestion size={14} /> </div>
          </OverlayTrigger>
        </div>
      </Col>
      
      {/* Clipe */}
      <Col className="d-flex justify-content-center fw-bold">
        <div>Clipe</div>
      </Col>
      
      {/* Iniciativa */}
      <Col className="d-flex justify-content-center fw-bold">
        <div>Iniciativa</div>
      </Col>
      
      {/* Força */}
      <Col className="d-flex justify-content-center fw-bold">
        <div>Força</div>
      </Col>
      
      {/* Tamanho */}
      <Col className="d-flex justify-content-center fw-bold">
        <div>Tamanho</div>
      </Col>
      
      {/* Custo */}
      <Col className="d-flex justify-content-center fw-bold">
        <div>Custo</div>
      </Col>
    </Row>

    <Row className="mb-1">
      {/* Dano */}
      <Col className="d-flex justify-content-center">
        <Form.Control 
          className="flush"
          value={weapon.damage}
          size="sm"
          style={{ width: '3rem', textAlign: 'center'}}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value, 'damage', 'number')}
        />
      </Col>

      {/* Alcance */}
      <Col md={3} className="d-flex justify-content-center">
        <Stack direction="horizontal" gap={1} className="align-items-center">
          <Form.Control
            value={closeRange}
            size="sm"
            className="text-center"
            style={{ width: '3rem' }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCloseRange(e.target.value)}
          />
          <span>/</span>
          <Form.Control
            value={mediumRange}
            size="sm"
            className="text-center"
            style={{ width: '3rem' }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMediumRange(e.target.value)}
          />
          <span>/</span>
          <Form.Control
            value={longRange}
            size="sm"
            className="text-center"
            style={{ width: '3rem' }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLongRange(e.target.value)}
          />
        </Stack>
      </Col>
      
      {/* Clipe */}
      <Col className="d-flex justify-content-center">
        <Form.Control 
          className="border-"
          value={weapon.clip}
          size="sm"
          style={{ width: '3rem', textAlign: 'center'}}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value, 'clip', 'number')}
        />
      </Col>
      
      {/* Iniciativa */}
      <Col className="d-flex justify-content-center">
        <Form.Control 
          className="border-"
          value={weapon.init}
          size="sm"
          style={{ width: '3rem', textAlign: 'center'}}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value, 'init', 'number')}
        />
      </Col>
      
      {/* Força */}
      <Col className="d-flex justify-content-center">
        <Form.Control 
          className="border-"
          value={weapon.strength}
          size="sm"
          style={{ width: '3rem', textAlign: 'center'}}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value, 'strength', 'number')}
        />
      </Col>
      
      {/* Tamanho */}
      <Col className="d-flex justify-content-center">
        <Form.Control 
          className="border-"
          value={weapon.size}
          size="sm"
          style={{ width: '3rem', textAlign: 'center'}}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value, 'size', 'number')}
        />
      </Col>
      
      {/* Custo */}
      <Col className="d-flex justify-content-center">
        <Form.Control 
          className="border-"
          value={weapon.cost}
          size="sm"
          style={{ width: '3rem', textAlign: 'center'}}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value, 'cost', 'number')}
        />
      </Col>
    </Row>
  </>
}