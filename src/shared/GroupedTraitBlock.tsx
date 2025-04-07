import { useTranslation } from 'react-i18next';
import DotRatingField from './DotRatingField';
import { Character } from '../classes/Character';
import { Form } from 'react-bootstrap';

interface Props {
  traits: Character['skills']['mental' | 'physical' | 'social'];
  onChange: (name: string, newValue: number) => void;
  onEditSpecialty?: (name: string, value: string) => void;
}

export default function GroupedTraitBlock({ traits, onChange, onEditSpecialty }: Props) {
  const { t } = useTranslation();
  
  return (
    <div className="d-flex flex-column gap-3">
      {traits.map((trait, index) => (
        <div key={`${trait.name}-${index}`}>
          <DotRatingField
            label={t(trait.labelKey)}
            value={trait.value}
            onChange={(newValue) => onChange(trait.name, newValue)}
          />

          {onEditSpecialty && (
            <Form.Control
              size="sm"
              placeholder={t('specialtiesPlaceholder')}
              value={trait.specialties ?? ''}
              onChange={(e) => onEditSpecialty(trait.name, e.target.value)}
              className="mt-1"
            />
          )}
        </div>
      ))}
    </div>
  );
}
