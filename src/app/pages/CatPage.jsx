import {Avatar, Box, Container, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Paper, Typography} from "@mui/material";
import BritishShorthair from "../../assets/images/cats/british-shorthair.jpg";
import DragonLi from "../../assets/images/cats/dragon-li.jpg";
import {BeachAccess, Image, Work} from "@mui/icons-material";
import CatBanner from "../../assets/images/banners/cat/cat.jpg";

export const CatPage = () => {
  return (
    <Container>
      <Grid container component="section" spacing={2} className="banner">
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Box className="image-box">
            <Box component="img" src={CatBanner} alt="cat banner"/>
            <Typography component="h6" variant="h6">征服喵星人——揭秘猫咪训练技巧</Typography>
            <Typography component="p" variant="subtitle2">
              对于主人们来说，训练猫咪简直就是一个巨大的挑战，喵星人们总是以世界之王的姿态自居，于是主人不再是主人，一夜之间沦为猫奴，...
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={0} sm={0} md={4} lg={4} xl={4} component="nav">
          <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            <ListItem>
              <ListItemAvatar>
                <Avatar><Image/></Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014"/>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar><Work/></Avatar>
              </ListItemAvatar>
              <ListItemText primary="Work" secondary="Jan 7, 2014"/>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar><BeachAccess/></Avatar>
              </ListItemAvatar>
              <ListItemText primary="Vacation" secondary="July 20, 2014"/>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Paper className="main content" component="section">
        <Grid container spacing={2} className="hot-pets">
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
            <Box component="img" src={BritishShorthair} alt="hot cat"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
            <Box component="img" src={DragonLi} alt="hot cat"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
            <Box component="img" src={BritishShorthair} alt="hot cat"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
            <Box component="img" src={BritishShorthair} alt="hot cat"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
            <Box component="img" src={BritishShorthair} alt="hot cat"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
            <Box component="img" src={BritishShorthair} alt="hot cat"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
            <Box component="img" src={BritishShorthair} alt="hot cat"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
            <Box component="img" src={BritishShorthair} alt="hot cat"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
            <Box component="img" src={BritishShorthair} alt="hot cat"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
            <Box component="img" src={BritishShorthair} alt="hot cat"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
            <Box component="img" src={BritishShorthair} alt="hot cat"/>
          </Grid>
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
            <Box component="img" src={BritishShorthair} alt="hot cat"/>
          </Grid>
        </Grid>
        <Grid container className="pets-articles">
          <Grid item md={8} lg={8} xl={8}></Grid>
          <Grid item md={4} lg={4} xl={4}></Grid>
        </Grid>
      </Paper>
    </Container>
  );
}