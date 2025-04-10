import { ReactElement } from "react";
import { Gear } from "../../interfaces/Equipments/Gear";
import { Col, Form, Row } from "react-bootstrap";

interface Props {
  gear: Gear;
  onChange: (value: string, trait: string, type: string) => void;
}

export default function GeatTraits({ gear, onChange }: Props): ReactElement {
  return <>
    <Row className="mb-1">
      {/* Durabilidade */}
      <Col className="d-flex justify-content-center fw-bold">
        <div>Durabilidade</div>
      </Col>
      
      {/* Estrutura */}
      <Col className="d-flex justify-content-center fw-bold">
        <div>Estrutura</div>
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
      {/* Durabilidade */}
      <Col className="d-flex justify-content-center fw-bold">
        <Form.Control 
          value={gear.durability}
          size="sm"
          style={{ width: '3rem', textAlign: 'center'}}
          onChange={(e: any) => onChange(e.target.value, 'durability', 'number')}
        />
      </Col>
      
      {/* Estrutura */}
      <Col className="d-flex justify-content-center fw-bold">
        <Form.Control 
          value={gear.structure}
          size="sm"
          style={{ width: '', textAlign: 'center'}}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value, 'structure', 'text')}
        />
      </Col>
      
      {/* Tamanho */}
      <Col className="d-flex justify-content-center">
        <Form.Control 
          value={gear.size}
          size="sm"
          style={{ width: '3rem', textAlign: 'center'}}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value, 'size', 'number')}
        />
      </Col>
      
      {/* Custo */}
      <Col className="d-flex justify-content-center">
        <Form.Control 
          value={gear.cost}
          size="sm"
          style={{ width: '3rem', textAlign: 'center'}}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value, 'cost', 'number')}
        />
      </Col>
    </Row>
  </>
}