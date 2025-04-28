import { Button, Col, Form } from "react-bootstrap";
import { SpecialTrait } from "../interfaces/SpecialTrait";
import DotRatingField from "./DotRatingField";
import { useTranslation } from "react-i18next";
import InfoTooltip from "./InfoTooltip";

interface Props {
  specialTrait: SpecialTrait;
  update: (id: string, updates: Partial<SpecialTrait>) => void;
  remove: (id: string) => void;
}

export default function DefaultTrait({ specialTrait: trait, update, remove }: Props) {
  const { t } = useTranslation();
  const hasTrait = (trait.customText !== undefined);

return <>
    <Col md={10}>
      <DotRatingField
        label={t(trait.labelKey)}
        value={trait.value}
        min={trait.min}
        max={trait.max ?? trait.value}
        onChange={(val) => update(trait.id, { value: val })}
        disabled={trait.fixed}
      />
    </Col>
    <Col md={2} className="text-end">
      <InfoTooltip description={t(`${trait.labelKey}.description`)} />
      <Button size="sm" variant="outline-danger" className="ms-1" onClick={() => remove(trait.id)}>X</Button>
    </Col>
    {hasTrait && <Col md={8}>
      <Form.Control
        size="sm"
        value={trait.customText ?? ''}
        placeholder={`Descrição para ${t(trait.labelKey)}...`}
        onChange={(e) => update(trait.id, { customText: e.target.value })}
      />
    </Col>}
  </>;
}