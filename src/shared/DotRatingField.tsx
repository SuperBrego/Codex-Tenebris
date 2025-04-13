// components/common/DotRatingField.tsx
import { Stack } from 'react-bootstrap';
import { Ban, Circle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useCharacter } from '../hooks/useCharacter';
import React from 'react';

interface Props {
  label: string;
  value: number;
  disabled: boolean;
  min?: number;
  max?: number;
  onChange: (newValue: number) => void;
}

export default function DotRatingField({ 
  label, 
  value, 
  disabled = false, 
  min,
  max,
  onChange 
}: Props) {
  const { colors } = useTheme();
  const { character } = useCharacter();
  const extraDots = character.getTemplateValues(label) ?? 0;

  const handleChangeDot = (dot: number) => {
    if(max && dot > max) return;
    if(min && dot < min) return;
    if(!disabled) onChange(dot);
  }

  function fill(dot: number): string {
    if(max && dot > max) return '#D3D3D3';
    return dot <= value ? `${colors.primary}` : 'none';
  }

  function cursorDisabled(dot: number): string {
    if(max && dot > max) return 'default';
    return 'pointer';
  }
  
  return (
    <div className="d-flex justify-content-between align-items-center gap-2">
      <strong>{label}</strong>
      <Stack direction="horizontal" gap={1}>
        {[1, 2, 3, 4, 5].map((dot) => (
          <React.Fragment key={dot}>
            {(max && dot > max) 
            ? <Ban
              size={20}
              fill={fill(dot)} // ou "none" se preferir transparente
              stroke={dot <= value ? colors.primary : colors.border}
              strokeWidth={2}
              onClick={() => {}}
              style={{ cursor: "default"}}
            />
            : <Circle
              size={20}
              fill={fill(dot)} // ou "none" se preferir transparente
              stroke={dot <= value ? colors.primary : colors.border}
              strokeWidth={2}
              onClick={() => handleChangeDot(dot)}
              style={{ cursor: cursorDisabled(dot)}}
            />}
          </React.Fragment>
          
        ))}

        {Array.from({ length: extraDots }, (_, i) => i + 1).map((dot) => (
          <Circle
            key={dot + 5}
            size={20}
            fill={colors.primary}
            stroke={colors.border}
            strokeWidth={2}
            onClick={() => {}}
            style={{ cursor: "default" }}
          />
        ))}
      </Stack>
    </div>
  );
}
