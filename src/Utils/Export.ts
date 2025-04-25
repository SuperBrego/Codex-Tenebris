import { Character } from "../classes/Character";
import { Armor } from "../interfaces/Equipments/Armor";
import { Gear } from "../interfaces/Equipments/Gear";
import { Weapon } from "../interfaces/Equipments/Weapon";
import { SpecialTrait } from "../interfaces/SpecialTrait";


export function downloadFile(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}


export function characterToBBCode(character: Character, t: (key: string) => string): string {
  const section = (title: string, content: string) => `[b]${title}[/b]\n${content}\n`;
  
  const traitsToBB = (traits: any[]) =>
    traits.map(trait => `• [i]${t(trait.labelKey)}[/i]: ${trait.value}`).join("\n");
  
  const skillsToBB = (skills: any[]) =>
    skills.map(skill => {
    const base = `• [i]${t(skill.labelKey)}[/i]: ${skill.value}`;
    return skill.specialties ? `${base} ([i]${skill.specialties}[/i])` : base;
  }).join("\n");
  
  const meritsToBBGrouped = (merits: SpecialTrait[]): string => {
    const groupMap: Record<string, SpecialTrait[]> = {};
    
    for (const merit of merits) {
      const category = merit.category?.toUpperCase() || "OUTROS";
      if (!groupMap[category]) groupMap[category] = [];
      groupMap[category].push(merit);
    }
    
    const typeLabels: Record<string, string> = {
      MENTAL: "Mentais",
      FISICO: "Físicos",
      SOCIAL: "Sociais",
      SOBRENATURAL: "Sobrenaturais",
      OUTROS: "Outros"
    };
    
    return Object.entries(groupMap)
    .map(([cat, list]) => {
      const label = typeLabels[cat] || cat;
      const content = list.map(merit => {
        const title = `[b]${t(merit.labelKey)}[/b] • ${merit.value} ponto${merit.value > 1 ? "s" : ""}`;
        const custom = merit.customText ? ` (${merit.customText})` : "";
        const desc = merit.description ? `\n  ${merit.description.replace(/\n/g, "\n  ")}` : "";
        return `${title}${custom}${desc}`;
      }).join("\n\n");
      
      return `[u][b]${label}[/b][/u]\n${content}`;
    })
    .join("\n\n");
  };
  
  
  const equipmentsToBB = (character: Character): string => {
    const weapons = character.equipments.filter((e): e is Weapon => e.type === "weapon");
    const armors = character.equipments.filter((e): e is Armor => e.type === "armor");
    const gears = character.equipments.filter((e): e is Gear => e.type === "gear");
    
    const weaponToText = (w: Weapon) =>
      `[b]${w.name}[/b]\n  ${t('damage')}: ${w.damage} • ${t('range')}: ${w.range} • ${t('clip')}: ${w.clip} • ${t('initiative')}: ${w.init} • ${t('strength')}: ${w.strength}` +
    (w.description ? `\n  [i]${w.description}[/i]` : "");
    
    const armorToText = (a: Armor) =>
      `[b]${a.name}[/b]\n  ${t('defense')}: ${a.defense} • ${t('ballistic')}: ${a.ballisticRating} • ${t('general')}: ${a.generalRating} • ${t('speed')}: ${a.speed} • ${t('strength')}: ${a.strength}` +
    (a.description ? `\n  [i]${a.description}[/i]` : "");
    
    const gearToText = (g: Gear) =>
      `[b]${g.name}[/b]\n  ${t('structure')}: ${g.structure} • ${t('durability')}: ${g.durability}` +
    (g.description ? `\n  [i]${g.description}[/i]` : "");
    
    return [
      weapons.length ? `[u][b]${t('weapons')}[/b][/u]\n` + weapons.map(weaponToText).join("\n\n") : "",
      armors.length ? `[u][b]${t('armors')}[/b][/u]\n` + armors.map(armorToText).join("\n\n") : "",
      gears.length ? `[u][b]${t('otherGear')}[/b][/u]\n` + gears.map(gearToText).join("\n\n") : ""
    ].filter(Boolean).join("\n\n");
  };
  
  return [
    `[size=14pt][b]${character.name}[/b][/size]`,
    section(`${t('player')}`, character.player || "-"),
    section(`${t('concept')}`, character.concept || "-"),
    section(`${t('chronicle')}`, character.chronicle || "-"),
    section(`${t('group')}`, character.group || "-"),
    section(`${t('age')}`, character.age?.toString() || "-"),
    
    section(`${t('attribute')} - ${t('mental')}`, traitsToBB(character.attributes.mental)),
    section(`${t('attribute')} - ${t('physical')}`, traitsToBB(character.attributes.physical)),
    section(`${t('attribute')} - ${t('social')}`, traitsToBB(character.attributes.social)),
    
    section(`${t('skills')} - ${t('mental')}`, skillsToBB(character.skills.mental)),
    section(`${t('skills')} - ${t('physical')}`, skillsToBB(character.skills.physical)),
    section(`${t('skills')} - ${t('social')}`, skillsToBB(character.skills.social)),
    
    section(`${t('merits')}`, meritsToBBGrouped(character.merits)),
    section(`${t('aspirations')}`, character.aspirations.map(a => `• ${a}`).join("\n") || "-"),
    section(`${t('conditions')}`, character.conditions.map(c => `• ${c}`).join("\n") || "-"),
    section(`${t('equipments')}`, equipmentsToBB(character)),
    section(`${t('physicalDescription')}`, character.personalInfo.physicalDescription || "-"),
    section(`${t('story')}`, character.story || "-")
  ].join("\n\n");
}