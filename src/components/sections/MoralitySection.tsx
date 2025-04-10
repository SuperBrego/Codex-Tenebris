import { Circle } from "lucide-react";
import { ReactElement } from "react";
import { Card, Form, Stack } from "react-bootstrap";
import { useCharacter } from "../../hooks/useCharacter";
import { useTheme } from "../../context/ThemeContext";

export default function MoralitySection(): ReactElement {
  const { character, updateCharacter } = useCharacter();
  const { colors } = useTheme();
  const morality = character.moralityValue;

  const handleChangeMorality = (value: number) => {
    updateCharacter({ moralityValue: value });
  }

  return <>
    <Card className="mb-3">
      <Card.Header style={{ backgroundColor: colors.primary, color: colors.primaryText }}> 
        <span className="text-center fw-bold">{character.moralityType}</span> 
      </Card.Header>
      <Card.Body>
        <Stack gap={1}>
          {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((dot) => (
            <Stack direction="horizontal" key={dot} className="justify-content-between">
              <span className="fw-bold">{dot}</span>
              <Form.Control 
              className="w-50"
              />
              <Circle
                key={dot}
                size={20}
                fill={dot === morality ? colors.primary : 'white'} // ou "none" se preferir transparente
                stroke={dot === morality ? colors.primary : "black"}
                strokeWidth={2}
                onClick={() => handleChangeMorality(dot)}
              />
            </Stack>
          ))}
        </Stack>
      </Card.Body>
    </Card>
  </>
}