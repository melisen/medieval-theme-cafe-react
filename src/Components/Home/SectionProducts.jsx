import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import "./Home.css"


export default function SectionProducts() {
  return (
    <Box maxWidth="lg" my={3}>
    <Container maxWidth="lg" >
    <Grid maxWidth="lg" container padding={3}>
      <Grid item xs={12} md={6} lg={6} padding={1} >
      <Typography variant="h3" color='secondary.light' textAlign={'left'}>
          Nuestros productos
          </Typography>
          <Typography variant="h6" color='primary.light' my={1} textAlign={'left'}>
          Variedad de juegos y objetos de colección que te van a encantar, ¡Elegí qué categoría querés ver primero!
          </Typography>
          <div className={"divcategoryname"}>
            imagen redonda 
          <Typography variant="h6" color='chocolate.light' paddingLeft={2}  textAlign={'left'}>
            Nombre Categoría 1
          </Typography>
          </div>
          <div className={"divcategoryname"}>
            imagen redonda 
          <Typography variant="h6" color='chocolate.light' paddingLeft={2}  textAlign={'left'}>
            Nombre Categoría 2
          </Typography>
          </div>
          <div className={"divcategoryname"}>
            imagen redonda 
          <Typography variant="h6" color='chocolate.light' paddingLeft={2}  textAlign={'left'}>
            Nombre Categoría 3
          </Typography>
          </div>
      </Grid>
      <Grid item xs={12} md={6} lg={6} padding={1} >
      <div className="samplepicture" >
        Foto sobre Productos
        </div>   
      </Grid>
    </Grid>
    </Container>
    </Box>
  )
}
