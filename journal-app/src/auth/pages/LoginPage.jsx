import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, TextField, Typography, Link } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
<form onSubmit={(e) => e.preventDefault()}>
          <Grid
            container
            spacing={2}
            direction="column"
            sx={{ width: '100%' }}
          >
            <Grid item>
              <TextField
                label="Correo"
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
                Login
              </Button>
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                fullWidth
                startIcon={<Google />}
                sx={{ height: 45 }}
              >
                Google
              </Button>
            </Grid>

            <Grid item sx={{ textAlign: 'right' }}>
              <Link component={RouterLink} color="primary" to="/auth/register">
              Sign up
              </Link>
            </Grid>
          </Grid>
        </form>


    </AuthLayout>
        
  );
};
