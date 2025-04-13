import { ReactElement } from "react";
import { Card } from "react-bootstrap";
import StatusBoxesList from "./StatusBoxesList";
import { useCharacter } from "../hooks/useCharacter";
import { HealthBox } from "../interfaces/HealthBox";

interface BaseProps { 
  boxes: HealthBox[];
  label: string;
  max?: number;
  subtitle?: string;
}

type Props = | (BaseProps & { trait: string; templateTrait?: never }) | (BaseProps & { trait?: never; templateTrait: string });

export default function TrackStatusCard({ boxes, max = 30, label, trait, templateTrait, subtitle }: Props): ReactElement {
  const { character, updateCharacter } = useCharacter();

  const handleChangeStats = (boxes: HealthBox[]) => {
    if(trait) updateCharacter({ [trait]: boxes });
    if(templateTrait) updateCharacter({ templateTraits: {
      ...character.templateTraits,
      [templateTrait]: boxes
    } });
  }

  return <>
    <Card className="mb-3">
      <Card.Header> <span>{label}</span> </Card.Header>
      <Card.Body className="d-flex flex-column justify-content-center text-center">
        <StatusBoxesList traitBoxes={boxes} max={max} onChange={handleChangeStats} />
        {(subtitle && subtitle.length > 0) && <div className="mt-2 fst-italic"><small>{subtitle}</small></div>}
      </Card.Body>
    </Card>
  </>;
}