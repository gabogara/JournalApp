import { Grid , Typography } from "@mui/material"


export const AuthLayout = ({children, title= '' }) => {
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
          {title}
        </Typography>
        
        { children }

        </Grid>
    </Grid>

    )


}