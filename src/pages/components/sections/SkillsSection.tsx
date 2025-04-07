import { Card, Button } from "react-bootstrap";
import { useCharacter } from "../../../hooks/useCharacter";
import GroupedTraitBlock from "../../../shared/GroupedTraitBlock";
import { useTranslation } from "react-i18next";

export default function SkillsSection() {
  const { character, updateCharacter } = useCharacter();
  const { t } = useTranslation();

  const updateSkill = (name: string, newValue: number) => {
    for (const group of ['mental', 'physical', 'social'] as const) {
      const skill = character.skills[group].find((s) => s.name === name);
      if (skill) {
        if (skill.value === 1 && newValue === 1) {
          skill.value = 0;
        } else {
          skill.value = newValue;
        }
        updateCharacter({});
        break;
      }
    }
  };

  const updateSpecialty = (name: string, value: string) => {
    for (const group of ['mental', 'physical', 'social'] as const) {
      const skill = character.skills[group].find((s) => s.name === name);
      if (skill) {
        skill.specialties = value;
        updateCharacter({});
        break;
      }
    }
  };

  const resetAllSkills = () => {
    for (const group of ['mental', 'physical', 'social'] as const) {
      character.skills[group].forEach((s) => {
        s.value = 0;
        s.specialties = '';
      });
    }
    updateCharacter({});
  };

  const groups: ('mental' | 'physical' | 'social')[] = ['mental', 'physical', 'social'];

  return (
    <div className="ps-4 w-50">
      <div className="d-flex justify-content-center mb-2">
        <Button variant="outline-danger" size="sm" onClick={resetAllSkills}>
          {t('resetSkills')}
        </Button>
      </div>

      {groups.map((group) => {
        const sortedSkills = [...character.skills[group]].sort((a, b) =>
          t(a.labelKey).localeCompare(t(b.labelKey))
        );

        return (
          <Card key={group} className="mb-3 shadow-sm">
            <Card.Header className="fw-semibold text-center text-uppercase">
              {t(group)}
            </Card.Header>
            <Card.Body>
              <GroupedTraitBlock
                traits={sortedSkills}
                onChange={updateSkill}
                onEditSpecialty={updateSpecialty}
              />
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
