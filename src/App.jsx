import style from './app.module.css';
import { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid2 } from '@mui/material';
import ProviderTheme from './components/ProviderTheme';

export default function App() {
  const [isError, setIsError] = useState(false);
  return (
    <>
      <ProviderTheme>
        <Container fixed maxWidth="lg">
          <Box component="form" autoComplete="off" className={style.form}>
            <Grid2
              container
              spacing={{ mobile: 1, tablet: 2, laptop: 3 }}
              direction="column"
            >
              <Grid2
                item="true"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  required
                  error={isError}
                  // helperText="Enter your name"
                  id="name"
                  label="Name"
                  placeholder="e.g., John Doe"
                />
              </Grid2>

              <Grid2
                item="true"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  required
                  error={isError}
                  // helperText="Enter your email"
                  id="email"
                  label="Email"
                  placeholder="Your email"
                />
              </Grid2>
              <Grid2
                item="true"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  error={isError}
                  id="phone"
                  label="Phone number"
                  placeholder="Your phone number"
                />
              </Grid2>
              <Grid2
                item="true"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  error={isError}
                  id="address"
                  label="Address"
                  placeholder="Your phone address"
                />
              </Grid2>

              {/* <Grid2 item>
              <Button type="submit" variant="contained">
                Submit form
              </Button>
            </Grid2> */}
            </Grid2>
          </Box>
        </Container>
      </ProviderTheme>
    </>
  );
}
