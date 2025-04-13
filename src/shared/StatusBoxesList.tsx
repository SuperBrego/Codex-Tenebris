import { ReactElement, useEffect, useState } from 'react';
import { DamageType } from '../types/DamageType';
import { HealthBox } from '../interfaces/HealthBox';
import { Square, SquareAsterisk, SquareSlash, SquareX } from 'lucide-react';
import { Stack } from 'react-bootstrap';

interface Props {
  traitBoxes: HealthBox[];
  max?: number;
  onChange: (boxes: HealthBox[]) => void;
}

export default function StatusBoxesList({ traitBoxes, max = 20, onChange }: Props): ReactElement {
  const [boxes, setBoxes] = useState<HealthBox[]>(traitBoxes);
  const healthStates = ['none', 'bashing', 'lethal', 'aggravated'] as const;

  useEffect(() => {
    onChange(boxes);
  }, [boxes]);

  const boxDisplay: Record<DamageType, ReactElement> = {
    none: <Square />,
    bashing: <SquareSlash />,
    lethal: <SquareX />,
    aggravated: <SquareAsterisk />
  };

  const handleProgressState = (index: number) => {
    setBoxes(prev => {
      const next = [...prev];
      const currentState = prev[index].state;
      const nextIndex = (healthStates.indexOf(currentState) + 1) % healthStates.length;
      next[index] = { ...prev[index], state: healthStates[nextIndex] };
      return next;
    });
  };

  return (
    <Stack direction='horizontal' className='d-flex justify-content-center'>
      {boxes.slice(0, max).map((box, index) => (
        <div key={index} onClick={() => handleProgressState(index)} style={{ cursor: 'pointer' }}>
          {boxDisplay[box.state]}
        </div>
      ))}
    </Stack>
  );
}
