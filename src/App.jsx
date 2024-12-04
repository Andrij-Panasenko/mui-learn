import style from './app.module.css';
import { useState } from 'react';
import { useFormControl } from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ProviderTheme from './components/ProviderTheme';

export default function App() {
  const [isError, setIsError] = useState(false);
  return (
    <>
      <ProviderTheme>
        <Container fixed maxWidth="md">
          <Box
            component="form"
            autoComplete="off"
            sx={{ border: '1px solid red' }}
          >
            <Grid
              container={true}
              spacing={3}
              columns={12}
              alignItems={'center'}
              justifyContent={'center'}
              sx={{ padding: '10px' }}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  error={isError}
                  id="name"
                  label="Name"
                  placeholder="e.g., John Doe"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  error={isError}
                  id="email"
                  label="Email"
                  placeholder="Your email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  error={isError}
                  id="phone"
                  label="Phone number"
                  placeholder="Your phone number"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  error={isError}
                  id="address"
                  label="Address"
                  placeholder="Your phone address"
                />
              </Grid>

              {/* <Grid>
                <Button type="submit" variant="contained">
                  Submit form
                </Button>
              </Grid> */}
            </Grid>
          </Box>
        </Container>
      </ProviderTheme>
    </>
  );
}
