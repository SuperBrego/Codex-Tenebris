// theme/ThemeContext.tsx
import { createContext, useContext, ReactNode } from 'react';
import { Theme } from '../types/Theme';
import { blueMysticTheme } from '../database/Themes';

const ThemeContext = createContext<Theme>(blueMysticTheme);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // No futuro, podemos usar localStorage ou selecionar entre temas
  const theme = blueMysticTheme;

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
