import { useTheme } from "./theme";

export default function ThemeSelection() {
  const { theme, setTheme } = useTheme();

  const handleChange = (event: any) => {
    setTheme(event?.target?.value);
  };
  return (
    <select id="switch-theme-button" value={theme} onChange={handleChange}>
      <option value="default">-default</option>
      <option value="cartoon">cartoon 🍎</option>
      <option value="win98">win98 🍌</option>
      <option value="modern">modern 🍊</option>
    </select>
  );
}
