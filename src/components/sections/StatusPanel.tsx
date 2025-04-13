import { ReactElement } from 'react';
import TrackStatusCard from '../../shared/TrackStatusCard';
import { useCharacter } from '../../hooks/useCharacter';
import { useTranslation } from 'react-i18next';
import MoralitySection from './MoralitySection';
import TrackCheckboxCard from '../../shared/TrackCheckboxCard';
import TextListCard from '../../shared/TextListCard';
import { Stack } from 'react-bootstrap';

export default function StatusPanel(): ReactElement {
  const { character } = useCharacter();
  const { t } = useTranslation();

  return (
    <Stack>
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

      {/* Agora, itens de Templates */}
      
      {/* Condições */}
      <TextListCard 
        label={t("conditions")}
        list={character.conditions}
        trait='conditions'
        placeholder={`${t("textTraitPlaceholder")} ${t("conditions")}...`}
      />

      {/* Aspirações */}
      <TextListCard 
        label={t("aspirations")}
        list={character.aspirations}
        trait='aspirations'
        placeholder={`${t("textTraitPlaceholder")} ${t("aspirations")}...`}
      />

    </Stack>
  );
};
