import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function ProviderTheme({ children }) {
  const themes = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={themes}>{children}</ThemeProvider>
    </>
  );
}


// values: {
//   laptop: 1024,
//         tablet: 640,
//         mobile: 0,
//         desktop: 1280,
// }
