import { Card } from "react-bootstrap";
import { useCharacter } from "../../hooks/useCharacter";
import GroupedTraitBlock from "../../shared/GroupedTraitBlock";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";

export default function AttributeSection() {
  const { character, updateCharacter } = useCharacter();
  const { t } = useTranslation();
  const { colors } = useTheme();

  const updateAttribute = (type: string, newValue: number) => {
    for (const group of ['mental', 'physical', 'social'] as const) {
      const attr = character.attributes[group].find((a) => a.name === type);
      if (attr) {
        attr.value = newValue;
        updateCharacter({});
        break;
      }
    }
  };

  const groups: ('mental' | 'physical' | 'social')[] = ['mental', 'physical', 'social'];

  return (
    <div className="d-flex gap-4 justify-content-center flex-wrap">
      {groups.map((group) => (
        <Card key={group} className="mb-3 shadow-sm">
          <Card.Header
            style={{ backgroundColor: colors.primary, color: colors.primaryText }}
            className="fw-semibold text-center text-uppercase"
          >
            {t(group)}
          </Card.Header>
          <Card.Body>
            <GroupedTraitBlock traits={character.attributes[group]} onChange={updateAttribute} />
          </Card.Body>
        </Card>
      ))}
    </div>
  );

}
