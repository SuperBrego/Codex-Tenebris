import { useTranslation } from "react-i18next";
import { useCharacter } from "../../hooks/useCharacter";
import TraitListCard from "../../shared/TraitListCard";
import { WerewolfTraits } from "../../interfaces/templates/WerewolfTraits";
import { SupernaturalTemplatesIDs } from "../../enum/SupernaturalTemplates";

export default function Renown() {
  const { character, updateCharacter } = useCharacter();
  const { t } = useTranslation();

  if(character.template !== SupernaturalTemplatesIDs.Werewolf) return <></>;

  const handleTraitChange = (key: string, newValue: number) => {
    const updated = { ...(character.templateTraits as WerewolfTraits).renown, [key]: newValue };
    updateCharacter({
      templateTraits: {
        ...character.templateTraits,
        renown: updated,
      },
    });
  }

  return (
    <TraitListCard
      label={t("renown")}
      subtitle={t("renownSubtitle")}
      list={(character.templateTraits as WerewolfTraits).renown}
      onChange={handleTraitChange}
    />
  );
}