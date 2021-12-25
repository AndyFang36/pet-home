import Box from "@mui/material/Box";
import {Routes, Route} from "react-router-dom";
import {HomePage} from "../pages/HomePage";
import {LoginPage} from "../pages/LoginPage";
import {RegisterPage} from "../pages/RegisterPage";
import {AboutPage} from "../pages/AboutPage";
import {ArticlePage} from "../pages/ArticlePage";
import {DogPage} from "../pages/DogPage";
import {CatPage} from "../pages/CatPage";
import {FAQPage} from "../pages/FAQPage";
import {ProfilePage} from "../pages/ProfilePage";
import {IntroductionPage} from "../pages/IntroductionPage";
import {Breadcrumbs, Container, Divider, Link} from "@mui/material";
import {Grain, Home, Whatshot} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import {PetPage} from "../pages/PetPage";
import {AquariumPage} from "../pages/AquariumPage";

export const Main = () => {
  return(
    <Box component="main" padding="1rem 0">
      <Container maxWidth={false}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
            href="#"
          >
            <Home sx={{ mr: 0.5 }} fontSize="inherit" />
            主页
          </Link>
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
            href="#"
          >
            <Whatshot sx={{ mr: 0.5 }} fontSize="inherit" />
            Core
          </Link>
          <Typography sx={{ display: 'flex', alignItems: 'center' }} color="text.primary">
            <Grain sx={{ mr: 0.5 }} fontSize="inherit" />
            Breadcrumb
          </Typography>
        </Breadcrumbs>
      </Container>
      <Container maxWidth={false} sx={{margin:"1rem 0"}}><Divider/></Container>
      <Routes>
        <Route exact index path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/articles/:articleId" element={<ArticlePage/>}/>
        <Route path="/dog" element={<DogPage/>}/>
        <Route path="/cat" element={<CatPage/>}/>
        <Route path="/pet" element={<PetPage/>}/>
        <Route path="/aquarium" element={<AquariumPage/>}/>
        <Route path="/introductions/:introduction" element={<IntroductionPage/>}/>
        <Route path="/faq" element={<FAQPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/user/profile" element={<ProfilePage/>}/>
      </Routes>
    </Box>
  );
}