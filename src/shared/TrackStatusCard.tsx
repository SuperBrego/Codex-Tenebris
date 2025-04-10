import { ReactElement } from "react";
import { Card } from "react-bootstrap";
import StatusBoxesList from "./StatusBoxesList";
import { useCharacter } from "../hooks/useCharacter";
import { HealthBox } from "../interfaces/HealthBox";
import { useTheme } from "../context/ThemeContext";

interface BaseProps { 
  boxes: HealthBox[];
  label: string;
  max?: number;
}

type Props = | (BaseProps & { trait: string; templateTrait?: never }) | (BaseProps & { trait?: never; templateTrait: string });

export default function TrackStatusCard({ boxes, max = 30, label, trait, templateTrait }: Props): ReactElement {
  const { character, updateCharacter } = useCharacter();
  const { colors } = useTheme();

  const handleChangeStats = (boxes: HealthBox[]) => {
    if(trait) updateCharacter({ [trait]: boxes });
    if(templateTrait) updateCharacter({ templateTraits: {
      ...character.templateTraits,
      [templateTrait]: boxes
    } });
  }

  return <>
    <Card className="mb-3">
      <Card.Header style={{ backgroundColor: colors.primary, color: colors.primaryText }}> 
        <span className="fw-bold">{label}</span>
      </Card.Header>
      <Card.Body className="d-flex justify-content-center">
        <StatusBoxesList traitBoxes={boxes} max={max} onChange={handleChangeStats} />
      </Card.Body>
    </Card>
  </>;
}