// components/common/SupernaturalTemplateSelect.tsx
import { Form } from 'react-bootstrap';
import { useCharacter } from '../hooks/useCharacter';
import { SupernaturalTemplatesIDs } from '../enum/SupernaturalTemplates';
import { getTemplateTraits } from '../Utils/SupernaturalTemplates';
import { useTranslation } from 'react-i18next';

const TEMPLATE_LABELS: Record<SupernaturalTemplatesIDs, string> = {
  [SupernaturalTemplatesIDs.Mortal]: 'mortal',
  [SupernaturalTemplatesIDs.Vampire]: 'vampire',
  [SupernaturalTemplatesIDs.Werewolf]: 'werewolf',
  [SupernaturalTemplatesIDs.Deviant]: 'deviant',
};

export default function SupernaturalTemplateSelect() {
  const { character, updateCharacter } = useCharacter();
  const { t } = useTranslation();

  return (
    <div className="p-3 border-bottom bg-white sticky-top" style={{ zIndex: 10 }}>
      <Form.Label className="fw-semibold"> {t('templateSelect')} </Form.Label>
      <Form.Select
        id={`template-select-${character.template}`}
        value={character.template}
        onChange={(e) =>
          updateCharacter({ 
            template: Number(e.target.value), 
            templateTraits: getTemplateTraits(Number(e.target.value))
          })
        }
        style={{ maxWidth: 300 }}
      >
        {Object.entries(TEMPLATE_LABELS).map(([id, label]) => (
          <option key={id} value={id}>
            {t(label)}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}
