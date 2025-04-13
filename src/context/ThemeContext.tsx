// theme/ThemeContext.tsx
import { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { Theme } from '../types/Theme';
import { themesByTemplate } from './ThemeMap';
import { useCharacter } from '../hooks/useCharacter';
import { SupernaturalTemplatesIDs } from '../enum/SupernaturalTemplates';
import { applyTheme } from '../Utils/ApplyTheme';

const ThemeContext = createContext<Theme>(themesByTemplate[SupernaturalTemplatesIDs.Mortal]);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { character } = useCharacter();
  const [theme, setTheme] = useState<Theme>(
    themesByTemplate[character.template] ?? themesByTemplate[SupernaturalTemplatesIDs.Mortal]
  );

  useEffect(() => {
    const newTheme = themesByTemplate[character.template] ?? themesByTemplate[SupernaturalTemplatesIDs.Mortal];
    setTheme(newTheme);

    // 🔥 Aplica as variáveis CSS
    applyTheme(newTheme);

    // 🔥 Define atributo data-theme para seletor dinâmico
    document.body.setAttribute('data-theme', newTheme.name);
  }, [character.template]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
