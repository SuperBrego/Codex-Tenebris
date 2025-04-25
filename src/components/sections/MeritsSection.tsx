import { Button, Card, Form, Row, Stack } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useCharacter } from "../../hooks/useCharacter";
import { useState } from "react";
import { SpecialTrait } from "../../interfaces/SpecialTrait";
import { _MortalMerits } from "../../database/Merits/MortalMerits";
import CustomTrait from "../../shared/CustomTrait";
import DefaultTrait from "../../shared/DefaultTrait";
import { SupernaturalTemplatesIDs } from "../../enum/SupernaturalTemplates";
import { _WerewolfMerits } from "../../database/Merits/WerewolfMerits";

const additionalMerits: Record<SupernaturalTemplatesIDs, SpecialTrait[]> = {
  [SupernaturalTemplatesIDs.Mortal]: [],
  [SupernaturalTemplatesIDs.Vampire]: [],
  [SupernaturalTemplatesIDs.Werewolf]: _WerewolfMerits,
  [SupernaturalTemplatesIDs.Deviant]: [],
};

export default function MeritsSection() {
  const { character, updateCharacter } = useCharacter();
  const { t } = useTranslation();
  
  const templateMerits: SpecialTrait[] = additionalMerits[character.template] ?? [];
  const predefinedMerits: SpecialTrait[] = templateMerits.concat(_MortalMerits);

  const [selected, setSelected] = useState('');

  const addMeritFromList = (labelKey: string) => {
    const base = predefinedMerits.find((m) => m.labelKey === labelKey);
    if (!base) return;

    const merit = {
      id: crypto.randomUUID(),
      name: base.name,
      labelKey: base.labelKey,
      type: 'merit',
      value: base.fixed ? base.value ?? 1 : base.min ?? 1,
      fixed: base.fixed,
      min: base.min,
      max: base.max,
      custom: false,
      category: base.category,
      customText: base.customText
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

  const updateMerit = (id: string, partial: Partial<SpecialTrait>) => {
    const updated = character.merits.map((m) => (m.id === id ? { ...m, ...partial } : m));
    updateCharacter({ merits: updated });
  };

  const removeMerit = (id: string) => {
    updateCharacter({ merits: character.merits.filter((m) => m.id !== id) });
  };

  const calculateTotalCost = () => {
    return character.merits.reduce((total, merit) => total + merit.value, 0);
  };

  function containsMerit(meritLabel: string): boolean {
    const found = character.merits.find(elem => elem.labelKey === meritLabel);
    return (found !== undefined);
  }

  // Agrupar méritos por categoria
  const groupedMerits = predefinedMerits.reduce((groups, merit) => {
    if (!groups[merit.category]) groups[merit.category] = [];
    groups[merit.category].push(merit);
    return groups;
  }, {} as Record<string, typeof predefinedMerits>);

  const sortTraits = (list: SpecialTrait[]): SpecialTrait[] => {
    return list.sort((a, b) => t(a.labelKey).localeCompare(t(b.labelKey)));
  }

  return (
    <Card className="mb-3">
      <Card.Header>
        {t('merits')}
      </Card.Header>
      <Card.Body>
        {/* Exibindo méritos com valor total */}
        <div className="mb-3">
          <strong>{t('totalMeritCost')}:</strong> {calculateTotalCost()}
        </div>

        {/* Select */}
        <Stack gap={2} className="mb-3">
          
          <Form.Select value={selected} onChange={(e) => setSelected(e.target.value)}>
            <option value="">{t('selectMerit')}</option>
            {Object.keys(groupedMerits).map((category) => (
              <optgroup label={t(category)} key={category}>
                {sortTraits(groupedMerits[category]).map((m) => (
                  <option key={m.name} value={m.labelKey} disabled={containsMerit(m.labelKey) && m.exclusive}>
                    {t(`${m.labelKey}`)}
                  </option>
                ))}
              </optgroup>
            ))}
          </Form.Select>
          <Button onClick={() => selected ? addMeritFromList(selected) : addCustomMerit()} variant="outline-primary">
            {selected ? t('addMerit') : t('customMerit')}
          </Button>
        </Stack>

        {sortTraits(character.merits).map((merit) => (
          <Row key={merit.id} className="mb-3 align-items-center">
            {merit.custom 
              ? <CustomTrait specialTrait={merit} update={updateMerit} remove={removeMerit} />
              : <DefaultTrait specialTrait={merit} update={updateMerit} remove={removeMerit} />
            }
          </Row>
        ))}
      </Card.Body>
    </Card>
  );
}
