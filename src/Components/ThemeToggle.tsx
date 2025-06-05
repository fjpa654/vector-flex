// src/Components/ThemeToggle.tsx
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`
        fixed top-4 right-4 z-50 w-8 h-8 
        transition-all duration-300 shadow-md 
        ${isDark ? 'bg-white' : 'bg-black'}
      `}
      style={{ backgroundColor: isDark ? '#fff' : '#000' }} // 🔥 force override
    />
  );
}
