import { ReactElement } from "react";
import { Card } from "react-bootstrap";
import { useCharacter } from "../hooks/useCharacter";
import { StateTrack } from "../interfaces/StateTrack";
import CheckboxesList from "./CheckboxesList";

interface BaseProps { 
  boxes: StateTrack[];
  label: string;
  max?: number;
}

type Props = | (BaseProps & { trait: string; templateTrait?: never }) | (BaseProps & { trait?: never; templateTrait: string });

export default function TrackCheckboxCard({ boxes, max = 30, label, trait, templateTrait }: Props): ReactElement {
  const { character, updateCharacter } = useCharacter();

  const handleChangeStats = (boxes: StateTrack[]) => {
    if(trait) updateCharacter({ [trait]: boxes });
    if(templateTrait) updateCharacter({ templateTraits: {
      ...character.templateTraits,
      [templateTrait]: boxes
    } });
  }

  return <>
    <Card className="mb-3">
      <Card.Header> 
        <span className="fw-bold">{label}</span>
      </Card.Header>
      <Card.Body className="d-flex justify-content-center flex-wrap">
        <CheckboxesList traitBoxes={boxes} max={max} onChange={handleChangeStats} />
      </Card.Body>
    </Card>
  </>;
}