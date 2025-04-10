import { ReactElement } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button, Card, Stack } from "react-bootstrap";
import { useCharacter } from "../../hooks/useCharacter";
import { Weapon, Armor, Gear } from "../../interfaces/Equipment";
import EquipmentComponent from "../EquipmentComponent";

export default function EquipmentsSection(): ReactElement {
  const { character, updateCharacter } = useCharacter();
  const { colors } = useTheme();
  const { t } = useTranslation();

  const handleAddWeapon = () => {
    const newWeapon: Weapon = {
      id: crypto.randomUUID(),
      name: '',
      damage: 0,
      cost: 0,
      init: 0,
      clip: 0,
      size: 1,
      strength: 0,
      range: '',
      description: '',
      type: 'weapon'
    };
    
    const equipList = [...character.equipments, newWeapon];
    updateCharacter({ equipments: equipList });
  }
  
  const handleAddArmor =  () => {
    const newArmor: Armor = {
      id: crypto.randomUUID(),
      name: '',
      generalRating: 0,
      ballisticRating: 0,
      cost: 0,
      defense: 0,
      size: 1,
      speed: 0,
      strength: 1,
      type: 'armor',
      description: '',
    };
    
    const equipList = [...character.equipments, newArmor];
    updateCharacter({ equipments: equipList });
  }

  const handleAddGear =  () => {
    const newGear: Gear = {
      id: crypto.randomUUID(),
      name: '',
      cost: 0,
      size: 1,
      durability: 0,
      structure: '',
      description: '',
      type: 'gear'
    };

    const equipList = [...character.equipments, newGear];
    updateCharacter({ equipments: equipList });
  }

  const handleRemove = (id: string) => {
    const equipList = character.equipments.filter(elem => elem.id !== id);
    updateCharacter({ equipments: equipList });
  }

  return <>
  <Card>
    <Card.Header style={{ backgroundColor: colors.primary, color: colors.primaryText }}>
      {t("equipments")}
    </Card.Header>

    <Card.Body>
      <Accordion alwaysOpen activeKey={['weapons', 'armors', 'gears']}>
        {/* Armas */}
        <AccordionItem eventKey="weapons">
          <AccordionHeader>{t("weapons/attacks")}</AccordionHeader>
          <AccordionBody>
            <Stack>
              {character.equipments.filter(elem => (elem.type === 'weapon')).map(
                weapon => <EquipmentComponent key={weapon.id} equipment={weapon} onRemove={handleRemove} />
              )}
              <Button variant="outline-primary" onClick={handleAddWeapon}>{t('add')} {t("weapon/attack")}</Button>
            </Stack>
          </AccordionBody>
        </AccordionItem>
        
        {/* Armaduras */}
        <AccordionItem eventKey="armors">
          <AccordionHeader>{t("armors")}</AccordionHeader>
          <AccordionBody>
            <Stack>
              {character.equipments.filter(elem => (elem.type === 'armor')).map(
                weapon => <EquipmentComponent key={weapon.id} equipment={weapon} onRemove={handleRemove} />
              )}
              <Button variant="outline-primary" onClick={handleAddArmor}>{t('add')} {t("armor")}</Button>
            </Stack>
          </AccordionBody>
        </AccordionItem>
        
        {/* Equipamentos Gerais */}
        <AccordionItem eventKey="gears">
          <AccordionHeader>{t("gears")}</AccordionHeader>
          <AccordionBody>
            <Stack>
              {character.equipments.filter(elem => (elem.type === 'gear')).map(
                weapon => <EquipmentComponent key={weapon.id} equipment={weapon} onRemove={handleRemove} />
              )}
              <Button variant="outline-primary" onClick={handleAddGear}>{t('add')} {t("gear")}</Button>
            </Stack>
          </AccordionBody>
        </AccordionItem>
      </Accordion>

    </Card.Body>
  </Card>
  </>;
}