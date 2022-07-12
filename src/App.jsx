import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import AppContext from './AppContext';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/themes';

function App() {
  window.matchMedia = null;
  const darkMode = useDarkMode(true);

  return (
    <div className="App">
      <AppContext.Provider value={{ darkMode }}>
        <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
          <GlobalStyles />
          <BrowserRouter>
            <MainApp />
          </BrowserRouter>
        </ThemeProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
