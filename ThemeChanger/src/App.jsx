import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/theme';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';
import useTheme from './contexts/theme';

function App() {
  const [themeMode, setThemeMode] = useState('light');
  const { lightTheme, darkTheme } = useTheme();

  useEffect(() => {
    const storedTheme = localStorage.getItem('themeMode');
    if (storedTheme) {
      setThemeMode(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className={`App ${themeMode}`}>
        <ThemeBtn />
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;
