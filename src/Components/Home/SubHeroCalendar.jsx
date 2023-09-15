import React from 'react'
import { Box, Container, Grid, Typography, Button, } from '@mui/material'
import "./Home.css"

export default function SubHeroCartelera() {
  return (
    <Box maxWidth="lg" my={3}>
    <Container maxWidth="lg"  >
    <Grid maxWidth="lg" container padding={3}>
      <Grid item xs={12} md={6} lg={6} padding={1} >
        <div className="samplepicture" >
        Foto cartelera de Eventos
        </div>        
        </Grid>
        <Grid item xs={12} md={6} lg={6} padding={1}  >
        <Typography variant="h3" color='secondary.light' textAlign={'left'} >
          Chequeá nuestra Cartelera de Eventos
          </Typography>
          <div style={{flexDirection:'row',textAlign:'left', marginTop:'1rem'}}>
          <Button size="medium" variant="contained" > Ver Cartelera </Button>
          </div>
        </Grid>
    </Grid>
    </Container>
    </Box>
  )
}
