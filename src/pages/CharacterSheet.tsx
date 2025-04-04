import { useAtom } from "jotai";

export const CharacterSheet = () => {

  const updateName = (name: string) => {
    // setCharacter({ ...character, name });
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-gray-900 text-white rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Ficha de Personagem</h1>

      <label className="block mb-2">Nome</label>
      <input
        className="w-full p-2 mb-4 text-black"
        // value={character.name}
        // onChange={(e) => updateName(e.target.value)}
      />

      <div className="grid grid-cols-2 gap-2">
        
      </div>
    </div>
  );
};