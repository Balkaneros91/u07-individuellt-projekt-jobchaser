import { useDarkMode } from "./DarkModeProvider";

export default function ThemeToggle() {
  const { isDarkMode, setDarkMode } = useDarkMode();

  return (
    <button onClick={() => setDarkMode(!isDarkMode)}
    className="border-2 rounded-lg p-1 rounded-mdbg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText bord">
      {isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}