import './App.css';
import Landing from './components/Landing';
import {createTheme, ThemeProvider} from '@mui/material'
import { purple } from '@mui/material/colors';

function App() {
  const theme = createTheme({
    palatte: {
      primary: {
        main: '#fefefe'
      },
      secondary: purple
    },
    typography: {
      fontFamily: 'Poppins'
    }
  })

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Landing />
    </div>
    </ThemeProvider>
  );
}

export default App;
