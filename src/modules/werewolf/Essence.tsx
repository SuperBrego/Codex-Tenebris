import { useTranslation } from "react-i18next";
import { SupernaturalTemplatesIDs } from "../../enum/SupernaturalTemplates";
import { useCharacter } from "../../hooks/useCharacter";
import TrackCheckboxCard from "../../shared/TrackCheckboxCard";
import { WerewolfTraits } from "../../interfaces/templates/WerewolfTraits";

export default function Essence() {
  const { character } = useCharacter();
  const { t } = useTranslation();

  if(character.template !== SupernaturalTemplatesIDs.Werewolf) return <></>;

  const essence = (character.templateTraits as WerewolfTraits).essence;
  if(!essence) {
    console.log("Essence not found in character template traits.");
    return <></>;
  }

  return <TrackCheckboxCard 
    boxes={essence}
    label={t("essence")}
    max={10}
    templateTrait={t("essence")}
  />
}