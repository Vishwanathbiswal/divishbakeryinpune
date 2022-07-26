// import {Typography} from '@mui/material'
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CakeSection from './components/CakeSection';
import ContactUs from './components/ContactUs';

const theme = createTheme({
  palette: {
    primary: {
      main: '#864313',
    },
  },
});

function App() {
  return (
    // Changing the color of the menu bar using ThemeProvider component & theme props
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container>
        {/* Inserting HeroSection inside Container component to keep everything in center */}
        <HeroSection />
        <CakeSection />
        <ContactUs />
      </Container>
    </ThemeProvider>
  );
}

export default App;
