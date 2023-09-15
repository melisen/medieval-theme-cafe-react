import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      maxWidth="lg"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.blueGrey.main
            : theme.palette.grey[800],
        color: 'white',
        p: 3,
      }}
    >
      <Container maxWidth="lg" style={{position:'relative', left:'0', bottom:'0', right:'0'}}>
        <Grid container spacing={5} maxWidth="lg" >
        <Grid item xs={12} sm={2}>
        Poner LOGO
        </Grid>
        <Grid item xs={12} sm={2}>

        </Grid>
        <Grid item xs={12} sm={2}>            
            
          </Grid>

          <Grid item xs={12} sm={2}>
            <Typography variant="body2"  color= 'white' fontWeight='bold' gutterBottom>
              Nosotros
            </Typography>
            <Typography variant="body2" color= 'white'>
              Historia
            </Typography>
            <Typography variant="body2" color= 'white'>
            info@example.com
            </Typography>
            <Typography variant="body2" color= 'white'>
              +54 9 11 0000 0000
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            Poner acceso Google Maps
            </Grid>
          <Grid item xs={12} sm={2} >
            <Typography variant="body2" color= 'white' fontWeight='bold' gutterBottom>
              Dónde estamos
            </Typography>
            <Typography variant="body2" color= 'white'>
              Calle número,
            </Typography>
            <Typography variant="body2" color= 'white'>
              Buenos Aires, 
            </Typography>
            <Typography variant="body2" color= 'white'>
              Argentina
            </Typography>
            
          </Grid>
          
        </Grid>
        <Grid container spacing={2} mt={2}   sx={{ borderTop: 1 }}>
        <Grid item xs={12} sm={3}  >
        <Typography variant="body2" color= 'white' align="baseline" >
            {"Copyright © "}
            melisen{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>

        </Grid>
        <Grid item xs={12} sm={3}>

        </Grid>

        <Grid item xs={12} sm={3} >

        <Link href="https://www.facebook.com/" color="inherit" marginLeft={2}>
              <Facebook fontSize='large'/>
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit" sx={{ pl: 1, pr: 1 }} marginLeft={2}
            >
              <Instagram fontSize='large'/>
            </Link>
            <Link href="https://www.twitter.com/" color="inherit" marginLeft={2}>
              <Twitter fontSize='large'/>
            </Link>
            <Link href="https://www.youtube.com/" color="inherit" marginLeft={2}>
              <YouTube fontSize='large'/>
            </Link>
        </Grid>

        </Grid>
        
      </Container>
    </Box>
  );
}