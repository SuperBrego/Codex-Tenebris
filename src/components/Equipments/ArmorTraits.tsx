import { ReactElement } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { Armor } from "../../interfaces/Equipments/Armor";

interface Props {
  armor: Armor;
  onChange: (value: string, trait: string, type: string) => void;
}

export default function ArmorTraits({ armor, onChange }: Props): ReactElement {
  
  return <>
    {/* Nome | Valor Geral/Valor Balístico | Força | Defesa | Tamanho | Custo */}
    
    <Row className="mb-1">
      {/* Valor Geral/Balístico */}
      <Col md={2} className="d-flex justify-content-center fw-bold">
        <div>Geral/Balístico</div>
      </Col>
      
      {/* Força */}
      <Col className="d-flex justify-content-center fw-bold">
        <div>Força</div>
      </Col>
      
      {/* Defesa */}
      <Col className="d-flex justify-content-center fw-bold">
        <div>Defesa</div>
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
    </Row>
  </>
}