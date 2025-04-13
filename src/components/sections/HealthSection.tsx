import { useTranslation } from "react-i18next";
import TrackStatusCard from "../../shared/TrackStatusCard";
import { useCharacter } from "../../hooks/useCharacter";

export default function HealthSection() {
  const { t } = useTranslation();
  const { character } = useCharacter();
  
  return <>
    {/* Vitalidade */}
    <TrackStatusCard
      label={`${t('health')}`} 
      max={character.healthPoints}
      trait='health' 
      boxes={character.health}
    />
  </>
}