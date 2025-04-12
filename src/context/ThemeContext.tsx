// theme/ThemeContext.tsx
import { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { Theme } from '../types/Theme';
import { themesByTemplate } from './ThemeMap';
import { useCharacter } from '../hooks/useCharacter';
import { SupernaturalTemplatesIDs } from '../enum/SupernaturalTemplates';

const ThemeContext = createContext<Theme>(themesByTemplate[SupernaturalTemplatesIDs.Mortal]);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { character } = useCharacter();
  const [theme, setTheme] = useState<Theme>(
    themesByTemplate[character.template] ?? themesByTemplate[SupernaturalTemplatesIDs.Mortal]
  );

  useEffect(() => {
    console.log(character.template);
    const newTheme = themesByTemplate[character.template] ?? themesByTemplate[SupernaturalTemplatesIDs.Mortal];
    setTheme(newTheme);
  }, [character.template]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
