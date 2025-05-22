import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, TextField, Typography, Link } from '@mui/material';
import { Google } from '@mui/icons-material';

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 2 }}
    >
      <Grid
        item
        sx={{
          width: '100%',
          maxWidth: 400,
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
          Login
        </Typography>

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
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
