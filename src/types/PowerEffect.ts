import { ArcanumSpell } from "../interfaces/Powers/ArcanumSpell";
import { DisciplinePower } from "../interfaces/Powers/Discipline";
import { Facet } from "../interfaces/Powers/Facet";

// Base para uso genérico em UI
export type PowerEffect = Facet | DisciplinePower | ArcanumSpell;