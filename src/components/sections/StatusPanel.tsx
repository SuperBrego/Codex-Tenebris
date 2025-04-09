import { ReactElement } from 'react';
import TrackStatusCard from '../../shared/TrackStatusCard';
import { useCharacter } from '../../hooks/useCharacter';
import { useTranslation } from 'react-i18next';
import TrackCheckboxCard from '../../shared/TrackCheckBoxCard';
import MoralitySection from './MoralitySection';

export default function StatusPanel(): ReactElement {
  const { character } = useCharacter();
  const { t } = useTranslation();

  return (
    <div className="status-panel">
      {/* Vitalidade */}
      <TrackStatusCard
        label={`${t('health')}`} 
        max={character.healthPoints}
        trait='health' 
        boxes={character.health}
      />
      {/* Força de Vontade */}
      <TrackCheckboxCard
        label={`${t('willpower')}`}
        trait='willpower'
        boxes={character.willpower} 
        max={character.willpowerPoints}
      />
      
      {/* Moralidade do Personagem */}
      <MoralitySection />

    </div>
  );
};
