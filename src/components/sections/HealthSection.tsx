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
      subtitle='Forma Dalu +2, Forma Gauru +4, Forma Urshul +3'
    />
  </>
}