import { Button, Card, Form, Row, Stack } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { SpecialTrait } from "../../interfaces/SpecialTrait";
import CustomTrait from "../../shared/CustomTrait";
import DefaultTrait from "../../shared/DefaultTrait";
import { useSupernaturalPowers } from "../../hooks/useSupernaturalPowers";

interface Props {
  label: string;
  type: string;
}

export default function SupernaturalPowersSection({ label, type }: Props) {
  const { t } = useTranslation();
  const { list, predefinedPowers, addPower, updatePower, removePower } = useSupernaturalPowers(label);

  const [selected, setSelected] = useState('');

  const addPowerFromList = (labelKey: string) => {
    const base = predefinedPowers.find((m) => m.labelKey === labelKey);
    if (!base) return;

    const power: SpecialTrait = {
      id: base.exclusive ? base.id : crypto.randomUUID(),
      name: base.name,
      labelKey: base.labelKey,
      type: type,
      value: base.fixed ? base.value ?? 1 : base.min ?? 1,
      fixed: base.fixed,
      min: base.min,
      max: base.max,
      custom: false,
      category: base.category,
      customText: base.customText
    };

    addPower(power);
    setSelected('');
  };

  const addCustomPower = () => {
    const custom: SpecialTrait = {
      id: crypto.randomUUID(),
      name: '',
      labelKey: '',
      value: 1,
      custom: true,
      description: '',
      type: type,
      fixed: false,
      category: 'custom'
    };
    addPower(custom);
  };

  function containsPower(meritLabel: string): boolean {
    const found = list.find(elem => elem.labelKey === meritLabel);
    return (found !== undefined);
  }

  const grouped = predefinedPowers.reduce((groups, power) => {
    if (!groups[power.category]) groups[power.category] = [];
    groups[power.category].push(power);
    return groups;
  }, {} as Record<string, typeof predefinedPowers>);

  const sortPowers = (list: SpecialTrait[]): SpecialTrait[] => {
    return list.sort((a, b) => t(a.labelKey).localeCompare(t(b.labelKey)));
  }

  return (
    <Card className="mb-3">
      <Card.Header>
        {t(label)}
      </Card.Header>
      <Card.Body>
        {/* Select */}
        <Stack gap={2} className="mb-3">
          
          <Form.Select value={selected} onChange={(e) => setSelected(e.target.value)}>
            <option value="">{`${t('select')} ${t(label)}`}</option>
            {Object.keys(grouped).map((category) => (
              <optgroup label={t(category)} key={category}>
                {sortPowers(grouped[category]).map((m) => (
                  <option key={m.name} value={m.labelKey} disabled={containsPower(m.labelKey) && m.exclusive}>
                    {t(`${m.labelKey}`)}
                  </option>
                ))}
              </optgroup>
            ))}
          </Form.Select>
          <Button onClick={() => selected ? addPowerFromList(selected) : addCustomPower()} variant="outline-primary">
            {selected ? `${t('add')} ${t(label)}` : `${t('add')} ${t(label)} ${t('custom')} `}
          </Button>
        </Stack>

        {sortPowers(list).map((power) => (
          <Row key={power.id} className="mb-3 align-items-center">
            {power.custom 
              ? <CustomTrait specialTrait={power} update={updatePower} remove={removePower} />
              : <DefaultTrait specialTrait={power} update={updatePower} remove={removePower} />
            }
          </Row>
        ))}
      </Card.Body>
    </Card>
  );
}
