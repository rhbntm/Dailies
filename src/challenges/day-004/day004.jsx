/*
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function Day004() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  );
}

export default Day004;

==================================================
CHALLENGE
==================================================

**Day: 4**
**Title: Broken Theme Toggle Debugging**
**Type: Debugging**
**Difficulty: 3**
**Estimated Implementation Time: ~35 minutes**

**Concepts:**
- React Context (createContext, Provider, useContext)
- useState
- Component composition and data flow
- Props vs. Context for state distribution
- Conditional rendering
- Debugging React component trees

**Why this challenge:**
Your last three sessions reveal a consistent difficulty: reasoning about how components relate to each other and how data flows between them—especially with Context. You've built features from scratch; now you'll diagnose and fix a broken implementation. This varies the surface task (debugging vs. feature building) while reinforcing the exact same unstable concepts: Context provider/consumer relationships, state ownership, and component responsibilities.

**Task:**
You are given a small React app with a **ThemeContext** that should provide a `theme` value (`'light'` or `'dark'`) and a `toggleTheme` function to the entire component tree. The app has three components: `App` (root), `Header`, and `Content`. Currently, the theme toggle button in `Header` does not work—the theme never changes. Your job is to identify and fix the bug(s) without rewriting the entire app.

**Requirements:**
1. The `ThemeContext` must be created and exported from `ThemeContext.jsx`.
2. `App.jsx` must wrap its children with `ThemeProvider` and supply the correct value.
3. `Header.jsx` must consume the context and render a button that calls `toggleTheme`.
4. `Content.jsx` must consume the context and render its background/text color based on the current theme.
5. Clicking the toggle button must switch the theme and update both `Header` and `Content` visually.

**Constraints:**
- Do not change the component structure (keep `App`, `Header`, `Content` as separate components).
- Do not move state out of `ThemeProvider`.
- Fix only what is broken; do not refactor working code.
- Use only React (no external state libraries).

**Acceptance Criteria:**
1. The app renders without console errors.
2. `Header` displays a button labeled "Toggle Theme".
3. `Content` displays text indicating the current theme (e.g., "Current theme: light").
4. Clicking the button toggles the theme between `'light'` and `'dark'`.
5. Both `Header` and `Content` visually reflect the new theme immediately after the click (e.g., background color changes).

**Optional Stretch:**
Add a third component `Footer` that also consumes `ThemeContext` and displays the current theme, confirming the context works at any depth.

---

**Starter File Structure and Initial Content (create these files and content):**

You will need to create the following files and directories within `Dailies/src/challenges/day-004/`.

**1. `Dailies/src/challenges/day-004/context/ThemeContext.jsx`**
```jsx
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

**2. `Dailies/src/challenges/day-004/components/Header.jsx`**
```jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{ background: theme === 'light' ? '#eee' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '10px' }}>
      <h1>Theme Toggle App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}

export default Header;
```

**3. `Dailies/src/challenges/day-004/components/Content.jsx`**
```jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <main style={{ background: theme === 'light' ? '#fff' : '#222', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
      <p>Current theme: {theme}</p>
      <p>This is some content.</p>
    </main>
  );
}

export default Content;
```

**4. `Dailies/src/challenges/day-004/Day004.jsx`**
```jsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Content from './components/Content';

function Day004() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}

export default Day004;
```

**5. Update `Dailies/src/App.jsx` to render `Day004`:**
```jsx
import Day004 from "./challenges/day-004/Day004";

function App() {
  return <Day004 />;
}

export default App;
```

Please create these files and their content. Once you've done that, you can proceed with debugging the application.

==================================================
REFLECTION
==================================================

What I learned:
- Object destructuring,
- ThemeProvider component vs ThemeContext.Provider

What I struggled with:
- Trying to reverse engineer the outcome of the provided code. E.G: <ThemeProvider >{children}</ThemeProvider>
- I conceptually learned array destructuring before in JavaScript, but being able to apply it in a coding environment is different from just understanding it in your head.

What I figured out without AI:
- I finished the challenge so I figured out how to fix the challenge itself first and foremost
- Then I figured out my pre-conceived confusion regarding object destructuring which I just did as I'm writing my reflection right now, I researched and found out that array destructuring is different from object destructuring. { children } is a prop and a single object containing attributes from an OOP perspective. But when applied to React, those { children } are actually components defined within their parent: ThemeProvider.

What I would do differently next time:
- This time the challenge is debugging which is a first time for me here, so I don't have enough data yet to know if this is a good performance or not. I'll keep doing what my approach right now.

Important insight:
- Nothing much this day regarding the challenge, but what even is the different between learning vs insight? My important insight lies in how this system as a whole should be handled especially since it no longer is a flat-file naming system with the introduction of subfolders within /challenges.
*/
