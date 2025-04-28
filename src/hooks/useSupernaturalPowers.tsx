import { useCharacter } from "./useCharacter";
import { SpecialTrait as SupernaturalTrait} from "../interfaces/SpecialTrait";
import { supernaturalPowerPaths, supernaturalPredefinedPowers } from "../Utils/SupernaturalPowerConfig";

export function useSupernaturalPowers(label: string) {
  const { character, updateCharacter } = useCharacter();

  const list = supernaturalPowerPaths[label]?.(character.templateTraits) ?? [];

  const predefinedPowers = supernaturalPredefinedPowers[label];

  const updatePower = (id: string, partial: Partial<SupernaturalTrait>) => {
    const updated = list.map((pwr: SupernaturalTrait) => (pwr.id === id ? { ...pwr, ...partial } : pwr));
    updateCharacter({
      templateTraits: {
        ...character.templateTraits,
        [label]: updated,
      },
    });
  };

  const addPower = (power: SupernaturalTrait) => {
    updateCharacter({
      templateTraits: {
        ...character.templateTraits,
        [label]: [...list, power],
      },
    });
  };

  const removePower = (id: string) => {
    const updated = list.filter((pwr: SupernaturalTrait) => pwr.id !== id);
    updateCharacter({
      templateTraits: {
        ...character.templateTraits,
        [label]: updated,
      },
    });
  };

  return {
    list,
    predefinedPowers,
    addPower,
    updatePower,
    removePower,
  };
}
