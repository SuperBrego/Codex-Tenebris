// components/Character/Header/headerFields.ts

import { useField } from "../hooks/useField";
import { useTraitField } from "../hooks/useTraitField";

type FieldConfig = {
  labelKey: string;
  use: () => [any, (val: any) => void];
  type?: 'text' | 'number' | 'select';
  options?: string[];
};

type HeaderConfig = Record<string, FieldConfig[][]>;

export const headerFieldsByTemplate: HeaderConfig = {
  mortal: [
    [
      { labelKey: 'name', use: () => useField('name') },
      { labelKey: 'virtue', use: () => useTraitField('virtue') },
      { labelKey: 'chronicle', use: () => useField('chronicle') },
    ],
    [
      { labelKey: 'age', use: () => useField('age'), type: 'number' },
      { labelKey: 'vice', use: () => useTraitField('vice') },
      { labelKey: 'faction', use: () => useTraitField('faction') },
    ],
    [
      { labelKey: 'player', use: () => useField('player') },
      { labelKey: 'concept', use: () => useField('concept') },
      { labelKey: 'group', use: () => useField('group') },
    ],
  ],
  vampire: [
    [
      { labelKey: 'name', use: () => useField('name') },
      { labelKey: 'mask', use: () => useTraitField('mask') },
      {
        labelKey: 'clan',
        use: () => useTraitField('clan'),
        type: 'select',
        options: ['Daeva', 'Gangrel', 'Mekhet', 'Nosferatu', 'Ventrue'],
      },
    ],
    [
      { labelKey: 'player', use: () => useField('player') },
      { labelKey: 'dirge', use: () => useTraitField('dirge') },
      { labelKey: 'bloodline', use: () => useTraitField('bloodline') },
    ],
    [
      { labelKey: 'chronicle', use: () => useField('chronicle') },
      { labelKey: 'concept', use: () => useField('concept') },
      { labelKey: 'covenant', use: () => useTraitField('covenant') },
    ],
  ],
};
