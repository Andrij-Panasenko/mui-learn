import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function ProviderTheme({ children }) {
  const themes = createTheme({
    breakpoints: {
      values: {
        laptop: 1024,
        tablet: 640,
        mobile: 0,
        desktop: 1280,
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={themes}>{children}</ThemeProvider>
    </>
  );
}
