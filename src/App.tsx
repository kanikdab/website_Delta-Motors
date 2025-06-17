import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import styled from 'styled-components';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
      paper: '#111111',
    },
    primary: {
      main: '#ff1744',
      light: '#ff616f',
      dark: '#b2102f',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#ff1744',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ff1744',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '10px 24px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(255, 23, 68, 0.3)',
          },
        },
        contained: {
          background: '#ff1744',
          color: '#ffffff',
          '&:hover': {
            background: '#b2102f',
          },
        },
        outlined: {
          borderColor: '#ff1744',
          color: '#ff1744',
          '&:hover': {
            borderColor: '#b2102f',
            color: '#b2102f',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#111111',
          borderRadius: 8,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 16px rgba(255, 23, 68, 0.2)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#000000',
          boxShadow: '0 2px 4px rgba(255, 23, 68, 0.1)',
        },
      },
    },
  },
});

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #000000;
  color: #ffffff;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 0;
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding-top: 72px; /* Высота AppBar + небольшой запас */
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContainer>
          <Navbar />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
