import { Button, Col, Form } from "react-bootstrap";
import { Merit } from "../interfaces/Merit";
import DotRatingField from "./DotRatingField";
import { useTranslation } from "react-i18next";

interface Props {
  merit: Merit;
  updateMerit: (id: string, updates: Partial<Merit>) => void;
  removeMerit: (id: string) => void;
}

export default function CustomTrait({ merit, updateMerit, removeMerit }: Props) {
  const { t } = useTranslation();

  return <>
    <Col md={5}>
      <Form.Control
        placeholder={t('meritName')}
        value={merit.labelKey}
        onChange={(e) => updateMerit(merit.id, { labelKey: e.target.value })}
        />
    </Col>
    <Col md={5}>
      <DotRatingField
        label={merit.name}
        value={merit.value}
        onChange={(val) => updateMerit(merit.id, { value: val })}
        disabled={merit.fixed}
      />
    </Col>
    <Col md={1} className="text-end">
      <Button size="sm" variant="outline-danger" onClick={() => removeMerit(merit.id)}>X</Button>
    </Col>
    <Col md={12}>
      <Form.Control
        as={'textarea'}
        placeholder={t('description')}
        value={merit.description ?? ''}
        onChange={(e) => updateMerit(merit.id, { description: e.target.value })}
      />
    </Col>
  </>;
}