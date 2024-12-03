import { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function App() {
  const [isError, setIsError] = useState(false);
  return (
    <>
      <Container fixed maxWidth="lg">
        <Box component="form" autoComplete="off">
          <div>
            <TextField
              required
              error={isError}
              // helperText="Enter your name"
              id="name"
              label="Name"
              placeholder="e.g., John Doe"
            />
          </div>
          <div>
            <TextField
              required
              error={isError}
              // helperText="Enter your email"
              id="email"
              label="Email"
              placeholder="Your email"
            />
          </div>
          <div>
            <TextField
              error={isError}
              id="phone"
              label="Phone number"
              placeholder="Your phone number"
            />
          </div>
          <div>
            <TextField
              error={isError}
              id="address"
              label="Address"
              placeholder="Your phone address"
            />
          </div>

          <Button variant="contained">Submit form</Button>
        </Box>
      </Container>
    </>
  );
}
