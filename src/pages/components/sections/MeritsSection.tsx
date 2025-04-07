import { Button, Card, Col, Form, Row, Stack } from "react-bootstrap";
import DotRatingField from "../../../shared/DotRatingField";
import { useTranslation } from "react-i18next";
import { useCharacter } from "../../../hooks/useCharacter";
import { useState } from "react";
import { Merit } from "../../../interfaces/Merit";
import { _MortalMerits } from "../../../database/Merits/MortalMerits";

export default function MeritsSection() {
  const { character, updateCharacter } = useCharacter();
  const { t } = useTranslation();

  const predefinedMerits: Merit[] = _MortalMerits;

  const [selected, setSelected] = useState('');

  const addMeritFromList = (name: string) => {
    const base = predefinedMerits.find((m) => m.name === name);
    if (!base) return;

    // Verificar duplicatas
    if (character.merits.some((m) => m.name === name)) {
      alert(t('duplicateMerit'));
      return;
    }

    const merit = {
      id: crypto.randomUUID(),
      name: base.name,
      labelKey: `merit.${base.name.toLowerCase()}`,
      value: base.fixed ? base.value ?? 1 : base.min ?? 1,
      fixed: base.fixed,
      min: base.min,
      max: base.max,
      custom: false,
      category: base.category
    };

    updateCharacter({ merits: [...character.merits, merit] });
    setSelected('');
  };

  const addCustomMerit = () => {
    const custom: any = {
      id: crypto.randomUUID(),
      name: '',
      labelKey: '',
      value: 1,
      custom: true,
      description: '',
      category: 'custom'
    };
    updateCharacter({ merits: [...character.merits, custom] });
  };

  const updateMerit = (id: string, partial: Partial<typeof character.merits[0]>) => {
    const updated = character.merits.map((m) => (m.id === id ? { ...m, ...partial } : m));
    updateCharacter({ merits: updated });
  };

  const removeMerit = (id: string) => {
    updateCharacter({ merits: character.merits.filter((m) => m.id !== id) });
  };

  const calculateTotalCost = () => {
    return character.merits.reduce((total, merit) => total + merit.value, 0);
  };

  // Agrupar méritos por categoria
  const groupedMerits = predefinedMerits.reduce((groups, merit) => {
    if (!groups[merit.category]) groups[merit.category] = [];
    groups[merit.category].push(merit);
    return groups;
  }, {} as Record<string, typeof predefinedMerits>);

  return (
    <Card className="mb-4">
      <Card.Header className="fw-bold">{t('merits')}</Card.Header>
      <Card.Body>
        <Stack gap={2} className="mb-3">
          <Form.Select value={selected} onChange={(e) => setSelected(e.target.value)}>
            <option value="">{t('selectMerit')}</option>
            {Object.keys(groupedMerits).map((category) => (
              <optgroup label={t(category)} key={category}>
                {groupedMerits[category].map((m) => (
                  <option key={m.name} value={m.name}>
                    {t(`merit.${m.name.toLowerCase()}`)}
                  </option>
                ))}
              </optgroup>
            ))}
          </Form.Select>
          <Button onClick={() => selected ? addMeritFromList(selected) : addCustomMerit()} variant="outline-primary">
            {selected ? t('addMerit') : t('customMerit')}
          </Button>
        </Stack>

        {/* Exibindo méritos com valor total */}
        <div className="mb-3">
          <strong>{t('totalMeritCost')}:</strong> {calculateTotalCost()}
        </div>

        {character.merits.map((merit) => (
          <Row key={merit.id} className="mb-3 align-items-center">
            <Col md={4}>
              {merit.custom ? (
                <Form.Control
                  placeholder={t('meritName')}
                  value={merit.labelKey}
                  onChange={(e) => updateMerit(merit.id, { labelKey: e.target.value })}
                />
              ) : (
                <span className="fw-semibold">{t(merit.labelKey)}</span>
              )}
            </Col>
            <Col md={3}>
              <DotRatingField
                label={merit.name}
                value={merit.value}
                onChange={(val) => updateMerit(merit.id, { value: val })}
                disabled={merit.fixed}
              />
            </Col>
            <Col md={4}>
              {merit.custom && (
                <Form.Control
                  placeholder={t('description')}
                  value={merit.description ?? ''}
                  onChange={(e) => updateMerit(merit.id, { description: e.target.value })}
                />
              )}
            </Col>
            <Col md={1} className="text-end">
              <Button size="sm" variant="outline-danger" onClick={() => removeMerit(merit.id)}>X</Button>
            </Col>
          </Row>
        ))}
      </Card.Body>
    </Card>
  );
}
