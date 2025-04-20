
export function migrateV1toV2(data: any): any {

  for (const char of data.characters || []) {

    // Corrige nome de propriedade
    if (char.templateTraits.essense !== undefined) {
      char.templateTraits.essence = char.templateTraits.essense;
      delete char.templateTraits.essense;
    }

    // Garante que essência tenha um valor padrão se não existir
    if (char.templateTraits.essence === undefined) {
      char.templateTraits.essence = [];
    }
  }

  return data;
}
