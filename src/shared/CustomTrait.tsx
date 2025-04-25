import { Button, Col, Form } from "react-bootstrap";
import { SpecialTrait } from "../interfaces/SpecialTrait";
import DotRatingField from "./DotRatingField";
import { useTranslation } from "react-i18next";

interface Props {
  specialTrait: SpecialTrait;
  update: (id: string, updates: Partial<SpecialTrait>) => void;
  remove: (id: string) => void;
}

export default function CustomTrait({ specialTrait: trait, update, remove }: Props) {
  const { t } = useTranslation();

  return <>
    <Col md={5}>
      <Form.Control
        placeholder={t('meritName')}
        value={trait.labelKey}
        onChange={(e) => update(trait.id, { labelKey: e.target.value })}
        />
    </Col>
    <Col md={5}>
      <DotRatingField
        label={trait.name}
        value={trait.value}
        onChange={(val) => update(trait.id, { value: val })}
        disabled={trait.fixed}
      />
    </Col>
    <Col md={2} className="text-end">
      <Button size="sm" variant="outline-danger" onClick={() => remove(trait.id)}>X</Button>
    </Col>
    <Col md={12}>
      <Form.Control
        as={'textarea'}
        placeholder={t('description')}
        value={trait.description ?? ''}
        onChange={(e) => update(trait.id, { description: e.target.value })}
      />
    </Col>
  </>;
}