import { ReactElement, useEffect, useState } from 'react';
import { StateTrack } from '../interfaces/StateTrack';
import { Stack } from 'react-bootstrap';
import { Square, SquareX } from 'lucide-react';

interface Props {
  traitBoxes: StateTrack[];
  max?: number;
  onChange: (boxes: StateTrack[]) => void;
}

export default function CheckboxesList({ traitBoxes, max = 20, onChange }: Props): ReactElement {
  const [boxes, setBoxes] = useState<StateTrack[]>(traitBoxes);

  useEffect(() => {
    setBoxes(traitBoxes);
  }, [traitBoxes]);

  useEffect(() => {
    onChange(boxes);
  }, [boxes]);

  const handleCheckBox = (index: number) => {
    setBoxes(prev => {
      const next = [...prev];
      next[index] = { ...next[index], state: !next[index].state }; // 🔁 sem mutação direta
      return next;
    });
  };

  return (
    <Stack direction="horizontal">
      {boxes.slice(0, max).map((box, index) => (
        <div key={index} onClick={() => handleCheckBox(index)} style={{ cursor: 'pointer' }}>
          {box.state ? <SquareX /> : <Square />}
        </div>
      ))}
    </Stack>
  );
}
