import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button, Card, Stack } from "react-bootstrap";
import { useCharacter } from "../../hooks/useCharacter";
import EquipmentComponent from "../EquipmentComponent";
import { createEquipment } from "../../Utils/Utils";
import { Weapon } from "../../interfaces/Equipments/Weapon";
import { Armor } from "../../interfaces/Equipments/Armor";
import { Gear } from "../../interfaces/Equipments/Gear";

export default function EquipmentsSection(): ReactElement {
  const { character, updateCharacter } = useCharacter();
  const { t } = useTranslation();

  const handleAddWeapon = () => {
    const newWeapon: Weapon = createEquipment('weapon') as Weapon;
    const equipList = [...character.equipments, newWeapon];
    updateCharacter({ equipments: equipList });
  }
  
  const handleAddArmor =  () => {
    const newArmor: Armor = createEquipment('armor') as Armor;    
    const equipList = [...character.equipments, newArmor];
    updateCharacter({ equipments: equipList });
  }

  const handleAddGear =  () => {
    const newGear: Gear = createEquipment('gear') as Gear;
    const equipList = [...character.equipments, newGear];
    updateCharacter({ equipments: equipList });
  }

  const handleRemove = (id: string) => {
    const equipList = character.equipments.filter(elem => elem.id !== id);
    updateCharacter({ equipments: equipList });
  }

  return <>
  <Card>
    <Card.Header>
      {t("equipments")}
    </Card.Header>

    <Card.Body>
      <Accordion alwaysOpen defaultActiveKey={['weapons', 'armors', 'gears']} className="mb-3">
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