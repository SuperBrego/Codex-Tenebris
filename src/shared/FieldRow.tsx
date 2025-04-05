// components/common/FieldRow.tsx
import { Row, Col } from 'react-bootstrap';
import { ReactNode } from 'react';

interface FieldRowProps {
  children: ReactNode[];
}

export default function FieldRow({ children }: FieldRowProps) {
  return (
    <Row className="mb-2">
      {children.map((child, index) => (
        <Col md={4} key={index}>
          {child}
        </Col>
      ))}
    </Row>
  );
}
