import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"

function Footer() {
  const { theme } = useContext(ThemeContext)
  return (
    <footer style={{background: theme === 'light' ? '#eee': '#333', color: theme === 'light' ? '#000': '#fff', padding: '10px'}}>
      Current footer theme: {theme}
    </footer>
  )
}
export default Footer;
