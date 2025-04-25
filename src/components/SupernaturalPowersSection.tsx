import { Button, Card, Form, Row, Stack } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { SupernaturalTemplatesIDs } from "../enum/SupernaturalTemplates";
import { SpecialTrait } from "../interfaces/SpecialTrait";
import { useCharacter } from "../hooks/useCharacter";
import { supernaturalPowerPaths } from "../Utils/SupernaturalPowerConfig";
import { useState } from "react";
import CustomTrait from "../shared/CustomTrait";
import DefaultTrait from "../shared/DefaultTrait";

const additionalPowers: Record<SupernaturalTemplatesIDs, SpecialTrait[]> = {
  [SupernaturalTemplatesIDs.Mortal]: [],
  [SupernaturalTemplatesIDs.Vampire]: [],
  [SupernaturalTemplatesIDs.Werewolf]: [],
  [SupernaturalTemplatesIDs.Deviant]: [],
};

export default function SupernaturalPowersSection() {
  const { character, updateCharacter } = useCharacter();
  const { t } = useTranslation();
  const config = supernaturalPowerPaths[character.template];

  if (!config) {
    return <Card><Card.Body>{t('noSupernaturalPowers')}</Card.Body></Card>;
  }

  const predefinedPowers: SpecialTrait[] = additionalPowers[character.template] ?? [];
  const currentPowers: SpecialTrait[] = config.path(character.templateTraits) ?? [];
  const [selected, setSelected] = useState('');

  const update = (updated: SpecialTrait[]) => {
    updateCharacter({
      templateTraits: config.updatePath(character.templateTraits, updated),
    });
  };

  const addPowerFromList = (labelKey: string) => {
    const base = predefinedPowers.find((p) => p.labelKey === labelKey);
    if (!base) return;

    const newPower: SpecialTrait = {
      id: crypto.randomUUID(),
      type: base.type,
      name: base.name,
      labelKey: base.labelKey,
      value: base.fixed ? base.value ?? 1 : base.min ?? 1,
      fixed: base.fixed,
      min: base.min,
      max: base.max,
      custom: false,
      category: base.category,
      customText: base.customText,
      description: base.description,
    };

    update([...currentPowers, newPower]);
    setSelected('');
  };

  const addCustomPower = () => {
    const custom: SpecialTrait = {
      id: crypto.randomUUID(),
      type: 'other',
      name: '',
      labelKey: '',
      value: 1,
      fixed: false,
      custom: true,
      category: 'custom',
      description: '',
    };
    update([...currentPowers, custom]);
  };

  const updatePower = (id: string, partial: Partial<SpecialTrait>) => {
    const updated = currentPowers.map((p) => (p.id === id ? { ...p, ...partial } : p));
    update(updated);
  };

  const removePower = (id: string) => {
    update(currentPowers.filter((p) => p.id !== id));
  };

  const calculateTotalCost = () => {
    return currentPowers.reduce((total, power) => total + (power.value ?? 0), 0);
  };

  const containsPower = (labelKey: string): boolean => {
    return currentPowers.some((p) => p.labelKey === labelKey);
  };

  const grouped = predefinedPowers.reduce((groups, p) => {
    const category = p.category ?? 'other';
    if (!groups[category]) groups[category] = [];
    groups[category].push(p);
    return groups;
  }, {} as Record<string, SpecialTrait[]>);  

  const sortTraits = (list: SpecialTrait[]): SpecialTrait[] => {
    return list.sort((a, b) => t(a.labelKey).localeCompare(t(b.labelKey)));
  };

  return (
    <Card className="mb-3">
      <Card.Header>{t('supernaturalPowers')}</Card.Header>
      <Card.Body>
        <div className="mb-3">
          <strong>{t('totalPowerCost')}:</strong> {calculateTotalCost()}
        </div>

        <Stack gap={2} className="mb-3">
          <Form.Select value={selected} onChange={(e) => setSelected(e.target.value)}>
            <option value="">{t('selectPower')}</option>
            {Object.keys(grouped).map((category) => (
              <optgroup label={t(category)} key={category}>
                {sortTraits(grouped[category]).map((p) => (
                  <option key={p.labelKey} value={p.labelKey} disabled={containsPower(p.labelKey) && p.exclusive}>
                    {t(p.labelKey)}
                  </option>
                ))}
              </optgroup>
            ))}
          </Form.Select>
          <Button
            onClick={() => (selected ? addPowerFromList(selected) : addCustomPower())}
            variant="outline-primary"
          >
            {selected ? t('addPower') : t('customPower')}
          </Button>
        </Stack>

        {sortTraits(currentPowers).map((power) => (
          <Row key={power.id} className="mb-3 align-items-center">
            {power.custom ? (
              <CustomTrait specialTrait={power} update={updatePower} remove={removePower} />
            ) : (
              <DefaultTrait specialTrait={power} update={updatePower} remove={removePower} />
            )}
          </Row>
        ))}
      </Card.Body>
    </Card>
  );
}
