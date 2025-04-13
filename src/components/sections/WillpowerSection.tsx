import { useTranslation } from "react-i18next";
import { useCharacter } from "../../hooks/useCharacter";
import TrackCheckboxCard from "../../shared/TrackCheckboxCard";

export default function WillpowerSection() {
  const { t } = useTranslation();
  const { character } = useCharacter();
  
  return <>
    {/* Vitalidade */}
    <TrackCheckboxCard
      label={`${t('willpower')}`}
      trait='willpower'
      boxes={character.willpower} 
      max={character.willpowerPoints}
    />
  </>
}