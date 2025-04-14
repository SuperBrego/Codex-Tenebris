import { common as common_pt } from "./pt-BR/common";
import { character as character_pt } from "./pt-BR/character";
import { attributes as attributes_pt } from "./pt-BR/attributes";
import { skills as skills_pt } from "./pt-BR/skills";
import { templates as templates_pt } from "./pt-BR/templates";
import { stats as stats_pt } from "./pt-BR/stats";
import { general as meritsGeneral_pt } from "./pt-BR/merits_general";
import { physical as meritsPhysical_pt } from "./pt-BR/merits_physical";
import { social as meritsSocial_pt } from "./pt-BR/merits_social";
import { martial as meritsMartial_pt } from "./pt-BR/merits_martial";
import { equipment as equipment_pt } from "./pt-BR/equipment";
import { vampire as vampire_pt } from "./pt-BR/vampire";
import { werewolf as werewolf_pt } from "./pt-BR/werewolf";
import { werewolf_merits as werewolfMerits_pt } from "./pt-BR/merits_werewolf";

import { common as common_en } from "./en-US/common";
import { character as character_en } from "./en-US/character";
import { attributes as attributes_en } from "./en-US/attributes";
import { skills as skills_en } from "./en-US/skills";
import { templates as templates_en } from "./en-US/templates";
import { stats as stats_en } from "./en-US/stats";
import { general as meritsGeneral_en } from "./en-US/merits_general";
import { physical as meritsPhysical_en } from "./en-US/merits_physical";
import { social as meritsSocial_en } from "./en-US/merits_social";
import { martial as meritsMartial_en } from "./en-US/merits_martial";
import { equipment as equipment_en } from "./en-US/equipment";
import { vampire as vampire_en } from "./en-US/vampire";
import { werewolf as werewolf_en } from "./en-US/werewolf";
import { werewolf_merits as werewolfMerits_en } from "./en-US/merits_werewolf";

const ptBR = {
  ...common_pt,
  ...character_pt,
  ...attributes_pt,
  ...skills_pt,
  ...templates_pt,
  ...stats_pt,
  ...meritsGeneral_pt,
  ...meritsPhysical_pt,
  ...meritsSocial_pt,
  ...meritsMartial_pt,
  ...equipment_pt,
  ...vampire_pt,
  ...werewolf_pt,
  ...werewolfMerits_pt,
};

const enUS = {
  ...common_en,
  ...character_en,
  ...attributes_en,
  ...skills_en,
  ...templates_en,
  ...stats_en,
  ...meritsGeneral_en,
  ...meritsPhysical_en,
  ...meritsSocial_en,
  ...meritsMartial_en,
  ...equipment_en,
  ...vampire_en,
  ...werewolf_en,
  ...werewolfMerits_en,
};

export default {
  "pt-BR": ptBR,
  "en-US": enUS
};