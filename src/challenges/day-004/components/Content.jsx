import { useContext } from 'react';
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
