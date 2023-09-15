import React from 'react'
import { Box, Container, Grid, Typography, Button } from '@mui/material'
import SubHeroImage from "../../../Images/subhero-image.jpg";


export default function SubHeroSection() {
  return (
    <Box maxWidth="lg">
      <Container maxWidth="lg"  >
      <Grid maxWidth="lg" container padding={3}>
        <Grid item xs={12} md={6} lg={6} padding={1} >
          <Typography variant="h1" color='chocolate.dark' textAlign={'left'}>
          Título SubHero de bienvenida
          </Typography>
          <Typography variant="h6" color='secondary.light'  textAlign={'left'}>
          Párrafo Párrafo Párrafo Párrafo Párrafo Párrafo Párrafo Párrafo Párrafo Párrafo Párrafo Párrafo Párrafo Párrafo 
          </Typography>
          <div style={{flexDirection:'row',textAlign:'left', marginTop:'1rem'}}>
          <Button size="large" variant="contained" > Acción </Button>
          </div>
          
        </Grid>
        <Grid item xs={12} md={6} lg={6}  padding={1}>
        <img src={SubHeroImage} alt="foto principal del sitio" className="SubHeroImage"/>
        </Grid>

      </Grid>
      </Container>
    </Box>
  )
}
