import { useTranslation } from "react-i18next";
import { useCharacter } from "../../hooks/useCharacter";
import TextListCard from "../../shared/TextListCard";

export default function ConditionsSection() {
  const { t } = useTranslation();
  const { character } = useCharacter();
  
  return <>
  <TextListCard
    label={t("conditions")}
    list={character.conditions}
    trait='conditions'
    placeholder={`${t("textTraitPlaceholder")} ${t("conditions")}...`}
  />
  </>
}