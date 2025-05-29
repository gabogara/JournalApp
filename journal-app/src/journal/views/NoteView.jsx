import {Grid, Typography } from '@mui/material';

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1 }}>
        <Grid item >
            <Typography fontSize={ 39 }  fontWeight='light'> Agoust 28,2025</Typography>
        </Grid>

    </Grid>
  )
}
