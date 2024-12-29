import './App.css';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({

});

function App() {
  return (
    <ThemeProvider theme={theme}>  {/* Wrap with ThemeProvider */}
      <div>
        {/* <Head/> */}
        <Button variant="contained" disableElevation>
          Disable elevation
          </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
