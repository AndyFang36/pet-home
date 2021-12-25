import {Box, Container, Grid, Stack} from "@mui/material";
import BritishShorthair from "../../assets/images/cats/british-shorthair.jpg";

export const DogPage = () => {
  return (
    <Container maxWidth={false}>
      <Box className="banner">

      </Box>
      <Box className="main content">
        <Grid container className="hot-pets">
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
            <Box component="img" src={BritishShorthair} alt="hot cat"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}></Grid>
        </Grid>
        <Grid container className="pets-articles">
          <Grid item md={8} lg={8} xl={8}></Grid>
          <Grid item md={4} lg={4} xl={4}></Grid>
        </Grid>
      </Box>
    </Container>
  );
}