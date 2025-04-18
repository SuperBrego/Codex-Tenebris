import { Button, Col, Form } from "react-bootstrap";
import { Merit } from "../interfaces/Merit";
import DotRatingField from "./DotRatingField";
import { useTranslation } from "react-i18next";
import MeritTooltip from "./MeritTooltip";

interface Props {
  merit: Merit;
  updateMerit: (id: string, updates: Partial<Merit>) => void;
  removeMerit: (id: string) => void;
}

export default function DefaultTrait({ merit, updateMerit, removeMerit }: Props) {
  const { t } = useTranslation();
  const hasTrait = (merit.customText !== undefined);

return <>
    <Col md={10}>
      <DotRatingField
        label={t(merit.labelKey)}
        value={merit.value}
        min={merit.min}
        max={merit.max ?? merit.value}
        onChange={(val) => updateMerit(merit.id, { value: val })}
        disabled={merit.fixed}
      />
    </Col>
    <Col md={2} className="text-end">
      <MeritTooltip description={t(`${merit.labelKey}.description`)} />
      <Button size="sm" variant="outline-danger" className="ms-1" onClick={() => removeMerit(merit.id)}>X</Button>
    </Col>
    {hasTrait && <Col md={8}>
      <Form.Control
        size="sm"
        value={merit.customText ?? ''}
        placeholder={`Descrição para ${t(merit.labelKey)}...`}
        onChange={(e) => updateMerit(merit.id, { customText: e.target.value })}
      />
    </Col>}
  </>;
}