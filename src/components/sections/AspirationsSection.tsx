import { ReactElement } from "react";
import { useCharacter } from "../../hooks/useCharacter";
import { useTranslation } from "react-i18next";
import TextListCard from "../../shared/TextListCard";

export default function AspirationsSections(): ReactElement {
  const { character } = useCharacter();
  const { t } = useTranslation();
  
  return <>
    <TextListCard 
      label={t("aspirations")}
      list={character.aspirations}
      trait='aspirations'
      placeholder={`${t("textTraitPlaceholder")} ${t("aspirations")}...`}
    />
  </>
}