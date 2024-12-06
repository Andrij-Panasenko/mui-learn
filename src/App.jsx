import { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ProviderTheme from './components/ProviderTheme';

export default function App() {
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setIsError(true);
    } else {
      setIsError(false);
      console.log('Form data:', formData);
    }
  };

  return (
    <>
      <ProviderTheme>
        <Container fixed maxWidth="md">
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              border: '1px solid red',
              borderRadius: '15px',
              backgroundColor: 'rgba(0, 0, 0, 0.06)',
            }}
            onSubmit={handleSubmit}
          >
            <Grid
              container={true}
              spacing={3}
              columns={12}
              alignItems={'center'}
              justifyContent={'center'}
              sx={{ padding: '20px' }}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  error={isError}
                  helperText={isError ? 'This field is required' : ' '}
                  id="name"
                  label="Name"
                  placeholder="e.g., John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  error={isError}
                  helperText={isError ? 'This field is required' : ' '}
                  id="email"
                  label="Email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="phone"
                  helperText=" "
                  label="Phone number"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  helperText=" "
                  id="address"
                  label="Address"
                  placeholder="Your phone address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item>
                <Button type="submit" variant="contained">
                  Submit form
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ProviderTheme>
    </>
  );
}
