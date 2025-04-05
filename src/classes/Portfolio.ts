import { Character } from "./Character";

export class Portfolio {
  characters: Character[] = [];
  activeId: string | null = null;

  constructor(initialCharacters: Character[] = []) {
    this.characters = initialCharacters;
    this.activeId = initialCharacters[0]?.id ?? null;
  }

  get active(): Character | null {
    return this.characters.find(c => c.id === this.activeId) ?? null;
  }

  add(character: Character) {
    this.characters.push(character);
    if (!this.activeId) this.activeId = character.id;
  }

  remove(id: string) {
    this.characters = this.characters.filter(c => c.id !== id);
    if (this.activeId === id) {
      this.activeId = this.characters[0]?.id ?? null;
    }
  }

  setActive(id: string) {
    if (this.characters.some(c => c.id === id)) {
      this.activeId = id;
    }
  }

  updateCharacter(id: string, partial: Partial<Character>) {
    const character = this.characters.find(c => c.id === id);
    if (character) Object.assign(character, partial);
  }

  toJSON(): object {
    return {
      characters: this.characters.map(c => ({ ...c })),
      activeId: this.activeId,
    };
  }

  static fromJSON(data: any): Portfolio {
    const characters = (data.characters || []).map((raw: any) => Object.assign(new Character(), raw));
    const portfolio = new Portfolio(characters);
    portfolio.activeId = data.activeId ?? characters[0]?.id ?? null;
    return portfolio;
  }
}
