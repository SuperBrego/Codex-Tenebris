// components/common/DotRatingField.tsx
import { Stack } from 'react-bootstrap';
import { Circle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

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
          <Circle
            key={dot}
            size={20}
            fill={fill(dot)}
            stroke={"#000"}
            onClick={() => handleChangeDot(dot)}
            style={{ cursor: cursorDisabled(dot)}}
          />
        ))}
      </Stack>
    </div>
  );
}
