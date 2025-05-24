import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, TextField, Typography, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {

  return (
    <AuthLayout title="Register">
<form onSubmit={(e) => e.preventDefault()}>
          <Grid
            container
            spacing={2}
            direction="column"
            sx={{ width: '100%' }}
          >
            <Grid item>
              <TextField
                label="Full Name"
                type="text"
                placeholder="Write your name"
                fullWidth
              />
            </Grid>

            <Grid item>
              <TextField
                label="Email"
                type="email"
                placeholder="correo@google.com"
                fullWidth
              />
            </Grid>

            <Grid item>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="••••••••"
                fullWidth
              />
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                sx={{ height: 45 }}
              >
                Sign up
              </Button>
            </Grid>

            <Grid item sx={{ textAlign: 'right' }}>
                <Typography> sx={{ mr: 1 }} Do you have an account already?</Typography>
              <Link component={RouterLink} color="primary" to="/auth/register">
              Log in
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
        
  );
};
