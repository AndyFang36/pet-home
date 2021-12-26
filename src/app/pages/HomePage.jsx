import {Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Stack, Typography} from "@mui/material";
import {Article as ArticleIcon, BeachAccess, Drafts, Image, Inbox, Work} from "@mui/icons-material";
import {ArticleItem} from "../../common/components/ArticleItem";
import {useScrollToTop} from "../../common/utils/useScrollToTop";
import {A11y, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
/** images */
import BannerImg1 from "../../assets/images/banners/home/home-1.jpg";
import BannerImg2 from "../../assets/images/banners/home/home-2.jpg";
import BannerImg3 from "../../assets/images/banners/home/home-3.jpg";
/** css */
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


/** 主页 */
export const HomePage = () => {
  useScrollToTop();

  return (
    <Container id="HomePage">
      <Grid container paddingBottom={4}>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Swiper
            id="HomeSwiper"
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide><img src={BannerImg1} alt=""/></SwiperSlide>
            <SwiperSlide><img src={BannerImg2} alt=""/></SwiperSlide>
            <SwiperSlide><img src={BannerImg3} alt=""/></SwiperSlide>
          </Swiper>
        </Grid>
        <Grid item lg={4} xl={4}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemAvatar><Avatar><Image /></Avatar></ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar><Avatar><Work /></Avatar></ListItemAvatar>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar><Avatar><BeachAccess /></Avatar>
              </ListItemAvatar>
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Box component="section" sx={{backgroundColor:"whitesmoke"}}>
          <Typography component="h5" variant="h5">热门宠物</Typography>
          <Divider/>
          <Grid container spacing={2}>
            <Grid item md={3} lg={3} xl={3}>
              <Card>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://www.mui.com/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={6} lg={6} xl={6}>
              <Grid container spacing={2}>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={3} lg={3} xl={3}>
              <List dense>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
        <Box component="section" sx={{backgroundColor:"whitesmoke"}}>
          <Typography component="h5" variant="h5">热门宠物</Typography>
          <Divider/>
          <Grid container spacing={2}>
            <Grid item md={3} lg={3} xl={3}>
              <Card>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://www.mui.com/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={6} lg={6} xl={6}>
              <Grid container spacing={2}>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={3} lg={3} xl={3}>
              <List dense>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
        <Box component="section" sx={{backgroundColor:"whitesmoke"}}>
          <Typography component="h5" variant="h5">热门宠物</Typography>
          <Divider/>
          <Grid container spacing={2}>
            <Grid item md={3} lg={3} xl={3}>
              <Card>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://www.mui.com/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={6} lg={6} xl={6}>
              <Grid container spacing={2}>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={5} xl={5}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={3} lg={3} xl={3}>
              <List dense>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="Single-line item"/>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}