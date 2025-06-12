import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, TextField, Typography, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
    email: 'gabo1gara@gmail.com',
    password: '123456',
    displayName: 'Gabriel Restrepo'
}

 const formValidations = {
    email: [ (value) => value.includes('@', 'The email address entered must contain the letter @')], 
    password: [ (value) => value.length >= 6, 'The password must contain at least 6 letters'],
    displayName: [ (value) => value.length >= 1, 'The name is required.'],

 }

export const RegisterPage = () => {

  const { 
    formState, displayName, email, password, onInputChange, 
    isFormValid, displayNameValid, emailValid, passwordValid, 
   } = useForm(formData, formValidations);
  
  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log(formState);
  }
  
  return (
    <AuthLayout title="Register">
<form onSubmit={ onSubmit }>
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
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error = { !displayNameValid }
                helperText = {displayNameValid}

              />
            </Grid>

            <Grid item>
              <TextField
                label="Email"
                type="email"
                placeholder="correo@google.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>

            <Grid item>
              <TextField
                label="Password"
                type="password"
                placeholder="••••••••"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
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
                <Typography sx={{ mr: 1 }}> Do you have an account already?</Typography>
              <Link component={RouterLink} color="primary" to="/auth/login">
              Log in
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
        
  );
};
