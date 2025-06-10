import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, TextField, Typography, Link } from '@mui/material';
import { Google } from '@mui/icons-material';


import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSingIn } from '../../store/auth/thunks';


export const LoginPage = () => {


const {status } = useSelector ( state => state.auth );

const dispatch = useDispatch();
const { email, password, onInputChange } = useForm({
  email: 'gabo1gara@gmail.com',
  password: '123456'
});

const isAuthenticating = useMemo( () => status === 'checking', [status] );


const onSubmit = ( event ) => {
  event.preventDefault();

  console.log( { email, password } );
  dispatch( checkingAuthentication() );
}

const onGoogleSignIn = () => {
  console.log('onGoogleSignIn');
  dispatch( startGoogleSingIn() );

}

  return (
    <AuthLayout title="Login">
<form onSubmit={ onSubmit }>
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
                name= "email"
                value= { email }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid item>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="••••••••"
                fullWidth
                name= "password"
                value= { password }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid item>
              <Button
              disabled = { isAuthenticating }
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
              disabled = { isAuthenticating }
                variant="contained"
                fullWidth
                startIcon={<Google />}
                sx={{ height: 45 }}
                onClick={ onGoogleSignIn }
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
