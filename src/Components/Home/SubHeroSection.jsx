import React from 'react'
import { Box, Container, Grid, Typography, Button } from '@mui/material'
import SubHeroImage from "../../Images/subhero-image.jpg";


export default function SubHeroSection() {
  return (
    <Box maxWidth="lg" my={3}>
      <Container maxWidth="lg"  >
      <Grid maxWidth="lg" container padding={3}>
        <Grid item xs={12} md={6} lg={6} padding={1} >
          <Typography variant="h1" color='chocolate.main' textAlign={'left'} fontFamily={"OldLondon"}>
          La taberna de Castelar
          </Typography>
          <Typography variant="h5" color='secondary.light'  textAlign={'left'}>
          Conocé más sobre nuestro café y su historia, los productos que podés comprar en el local, nuestro menú y horarios de servicio. 
          </Typography>
          <div style={{flexDirection:'row',textAlign:'left', marginTop:'1rem'}}>
          <Button size="medium" variant="contained" > Quiero saber más </Button>
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
