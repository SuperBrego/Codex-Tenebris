// components/common/DotRatingField.tsx
import { Stack } from 'react-bootstrap';
import { Circle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Props {
  label: string;
  value: number;
  disabled: boolean;
  onChange: (newValue: number) => void;
}

export default function DotRatingField({ label, value, disabled = false, onChange }: Props) {
  const { colors } = useTheme();

  const handleChangeDot = (dot: number) => {
    if(!disabled) { 
      onChange(dot)
    }
  }

  return (
    <div className="d-flex justify-content-between align-items-center gap-2">
      <strong>{label}</strong>
      <Stack direction="horizontal" gap={1}>
        {[1, 2, 3, 4, 5].map((dot) => (
          <Circle
            key={dot}
            size={20}
            fill={dot <= value ? `${colors.primary}` : 'none'}
            stroke={"#000"}
            onClick={() => handleChangeDot(dot)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </Stack>
    </div>
  );
}
