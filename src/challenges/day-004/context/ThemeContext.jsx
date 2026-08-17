import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/*
reflection notes:
I got confused by the children inside ThemeProvider.

So I know that ThemeProvider is receiving children but I don't know what the content of children or where it's being originated. Then I asked AI what it is, and the answer is the children component within the ThemeProvider in the Day004.jsx. I most likely wouldn't have been confused by this, had I created the whole file myself, but since it's a debugging practice, I had less clue as to what x, y, z means and where are they getting a, b, c from x, y, z.
*/
