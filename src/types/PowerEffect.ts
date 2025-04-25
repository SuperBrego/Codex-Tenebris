import { ArcanumSpell } from "../interfaces/Powers/ArcanumSpell";
import { DisciplinePower } from "../interfaces/Powers/Discipline";
import { Facet } from "../interfaces/Powers/Facet";
import { Rite } from "../interfaces/Powers/Rite";
import { SupernaturalPower } from "../interfaces/SupernaturalPower";

// Base para uso genérico em UI
export type PowerEffect = SupernaturalPower | Facet | DisciplinePower | ArcanumSpell | Rite;