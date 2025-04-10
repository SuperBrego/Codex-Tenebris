import { SupernaturalTemplatesIDs } from "../enum/SupernaturalTemplates";
import { useCharacter } from "../hooks/useCharacter";
import MortalHeader from "./headers/MortalHeader";
import VampireHeader from "./headers/VampireHeader";

export default function PersonalHeader() {
  const { character } = useCharacter();

  switch (character.template) {
    case SupernaturalTemplatesIDs.Vampire: return <VampireHeader />;
    default: return <MortalHeader />;
  }
}
