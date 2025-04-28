import { ReactElement } from "react";
import SupernaturalPowersSection from "../../components/sections/SupernaturalPowersSection";
import { useCharacter } from "../../hooks/useCharacter";
import { SupernaturalTemplatesIDs } from "../../enum/SupernaturalTemplates";

export default function Gifts(): ReactElement {
  const { character } = useCharacter();

  if(character.template !== SupernaturalTemplatesIDs.Werewolf) return <></>;
  
  return <SupernaturalPowersSection label="gifts" type="gifts" />;
}