import {Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Stack, Typography} from "@mui/material";
import {Article as ArticleIcon, BeachAccess, Drafts, Image, Inbox, Pets as PetsIcon, Work} from "@mui/icons-material";
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
import {Link} from "react-router-dom";


/** 主页 */
export const HomePage = () => {
  useScrollToTop();

  return (
    <Container id="HomePage">
      <Grid container paddingBottom={4}>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Swiper
            id="HomeBannerSwiper"
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
          >
            <SwiperSlide><img src={BannerImg1} alt=""/></SwiperSlide>
            <SwiperSlide><img src={BannerImg2} alt=""/></SwiperSlide>
            <SwiperSlide><img src={BannerImg3} alt=""/></SwiperSlide>
          </Swiper>
        </Grid>
        <Grid item lg={4} xl={4}>
          <List sx={{width: '100%', bgcolor: 'background.paper'}} dense>
            <ListItem>
              <ListItemButton>
                <ListItemAvatar><Avatar><Image/></Avatar></ListItemAvatar>
                <ListItemText primary="宠物大全" secondary="在这里，我们用相知与它结缘"/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemAvatar><Avatar><Work/></Avatar></ListItemAvatar>
                <ListItemText primary="宠物饲养" secondary="在这里，我们用安全伴它成长"/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemAvatar><Avatar><BeachAccess/></Avatar>
                </ListItemAvatar>
                <ListItemText primary="宠物训练" secondary="在这里，我们用鼓励陪它同行"/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemAvatar><Avatar><BeachAccess/></Avatar>
                </ListItemAvatar>
                <ListItemText primary="宠物医疗" secondary="在这里，我们用呵护保它健康"/>
              </ListItemButton>
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
        <Box component="section">
          <Typography component="h5" variant="h5">
            <b className="section-label">狗狗百科</b><Link to="#" className="more-articles">更多 >></Link>
          </Typography>
          <Divider/>
          <Grid container spacing={2}>
            <Grid item md={3} lg={3} xl={3}>
              <Swiper
                id="HomeSectionSwiper"
                modules={[Navigation, Pagination, A11y]}
                slidesPerView={1}
                navigation
              >
                <SwiperSlide>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image="http://img.boqiicdn.com/Data/BK/A/1507/2/imagick44411435805398_o.jpg"
                    />
                    <CardContent>
                      <Typography variant="body2">
                        为狗狗做好驱虫工作不只是为了防止某些寄生虫对我们的健康造成影响，更主要的是因为寄生虫对于狗狗的危害来的更大，而且寄生虫不...
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">分享</Button>
                      <Button size="small">收藏</Button>
                    </CardActions>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image="http://img.boqiicdn.com/Data/BK/A/1507/3/imagick49061435888730_o.jpg"
                    />
                    <CardContent>
                      <Typography variant="body2">
                        为狗狗做好驱虫工作不只是为了防止某些寄生虫对我们的健康造成影响，更主要的是因为寄生虫对于狗狗的危害来的更大，而且寄生虫不...
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">分享</Button>
                      <Button size="small">收藏</Button>
                    </CardActions>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image="http://img.boqiicdn.com/Data/BK/A/1507/2/imagick93351435823901_o.jpg"
                    />
                    <CardContent>
                      <Typography variant="body2">
                        其实狗狗身体本身就会存在各式各样的酶，来帮助机体消化以及吸收营养。不过随着某些食物摄入量地减少，某些酶的活性就会变得越来...
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">分享</Button>
                      <Button size="small">收藏</Button>
                    </CardActions>
                  </Card>
                </SwiperSlide>
              </Swiper>
            </Grid>
            <Grid item md={6} lg={6} xl={6}>
              <Grid container spacing={2} className="article-items">
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article2"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/7/imagick45181623054318_s.png"
                    title="猫咪驱虫多久一次合适？标准答案来咯！！"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick74731622797580_s.png"
                    title="铲屎官看过来，狗狗驱虫药走心分享"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick78041622797452_s.png"
                    title="养狗课堂：狗身上的跳蚤怎么去除"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick27321622797311_s.png"
                    title="五年铲屎官的走心分享，狗狗体外驱虫"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick12481622797152_s.png"
                    title="拜宠爽好用吗？养狗老手告诉你"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick47871622794886_s.png"
                    title="给小狗狗驱虫 有这个必要吗？怎么驱？"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick94461622794744_s.png"
                    title="狗感染心丝虫有多可怕？心丝虫的知识你真要了解一下"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={3} lg={3} xl={3}>
              <List dense className="faq-list">
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="狗狗不吃东西怎么办"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="一个月大左右的金毛能和幼儿奶粉吗"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="一个月大左右的金毛能和幼儿奶粉吗"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="狗狗的疫苗问题"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="关于驱虫问题"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="点蚊香对狗狗有影响吗？"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="舌下囊肿"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="狗舌下囊肿"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="宝宝不吃饭怎么办"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="狗狗总睡觉"/>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
        <Box component="section">
          <Typography component="h5" variant="h5">
            <b className="section-label">狗狗百科</b><Link to="#" className="more-articles">更多 >></Link>
          </Typography>
          <Divider/>
          <Grid container spacing={2}>
            <Grid item md={3} lg={3} xl={3}>
              <Swiper
                id="HomeSectionSwiper"
                modules={[Navigation, Pagination, A11y]}
                slidesPerView={1}
                navigation
              >
                <SwiperSlide>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image="http://img.boqiicdn.com/Data/BK/A/1507/2/imagick44411435805398_o.jpg"
                    />
                    <CardContent>
                      <Typography variant="body2">
                        为狗狗做好驱虫工作不只是为了防止某些寄生虫对我们的健康造成影响，更主要的是因为寄生虫对于狗狗的危害来的更大，而且寄生虫不...
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">分享</Button>
                      <Button size="small">收藏</Button>
                    </CardActions>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image="http://img.boqiicdn.com/Data/BK/A/1507/3/imagick49061435888730_o.jpg"
                    />
                    <CardContent>
                      <Typography variant="body2">
                        为狗狗做好驱虫工作不只是为了防止某些寄生虫对我们的健康造成影响，更主要的是因为寄生虫对于狗狗的危害来的更大，而且寄生虫不...
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">分享</Button>
                      <Button size="small">收藏</Button>
                    </CardActions>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image="http://img.boqiicdn.com/Data/BK/A/1507/2/imagick93351435823901_o.jpg"
                    />
                    <CardContent>
                      <Typography variant="body2">
                        其实狗狗身体本身就会存在各式各样的酶，来帮助机体消化以及吸收营养。不过随着某些食物摄入量地减少，某些酶的活性就会变得越来...
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">分享</Button>
                      <Button size="small">收藏</Button>
                    </CardActions>
                  </Card>
                </SwiperSlide>
              </Swiper>
            </Grid>
            <Grid item md={6} lg={6} xl={6}>
              <Grid container spacing={2} className="article-items">
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article2"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/7/imagick45181623054318_s.png"
                    title="猫咪驱虫多久一次合适？标准答案来咯！！"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick74731622797580_s.png"
                    title="铲屎官看过来，狗狗驱虫药走心分享"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick78041622797452_s.png"
                    title="养狗课堂：狗身上的跳蚤怎么去除"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick27321622797311_s.png"
                    title="五年铲屎官的走心分享，狗狗体外驱虫"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick12481622797152_s.png"
                    title="拜宠爽好用吗？养狗老手告诉你"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick47871622794886_s.png"
                    title="给小狗狗驱虫 有这个必要吗？怎么驱？"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick94461622794744_s.png"
                    title="狗感染心丝虫有多可怕？心丝虫的知识你真要了解一下"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={3} lg={3} xl={3}>
              <List dense className="faq-list">
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="狗狗不吃东西怎么办"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="一个月大左右的金毛能和幼儿奶粉吗"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="一个月大左右的金毛能和幼儿奶粉吗"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="狗狗的疫苗问题"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="关于驱虫问题"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="点蚊香对狗狗有影响吗？"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="舌下囊肿"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="狗舌下囊肿"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="宝宝不吃饭怎么办"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="狗狗总睡觉"/>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
        <Box component="section">
          <Typography component="h5" variant="h5">
            <b className="section-label">狗狗百科</b><Link to="#" className="more-articles">更多 >></Link>
          </Typography>
          <Divider/>
          <Grid container spacing={2}>
            <Grid item md={3} lg={3} xl={3}>
              <Swiper
                id="HomeSectionSwiper"
                modules={[Navigation, Pagination, A11y]}
                slidesPerView={1}
                navigation
              >
                <SwiperSlide>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image="http://img.boqiicdn.com/Data/BK/A/1507/2/imagick44411435805398_o.jpg"
                    />
                    <CardContent>
                      <Typography variant="body2">
                        为狗狗做好驱虫工作不只是为了防止某些寄生虫对我们的健康造成影响，更主要的是因为寄生虫对于狗狗的危害来的更大，而且寄生虫不...
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">分享</Button>
                      <Button size="small">收藏</Button>
                    </CardActions>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image="http://img.boqiicdn.com/Data/BK/A/1507/3/imagick49061435888730_o.jpg"
                    />
                    <CardContent>
                      <Typography variant="body2">
                        为狗狗做好驱虫工作不只是为了防止某些寄生虫对我们的健康造成影响，更主要的是因为寄生虫对于狗狗的危害来的更大，而且寄生虫不...
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">分享</Button>
                      <Button size="small">收藏</Button>
                    </CardActions>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image="http://img.boqiicdn.com/Data/BK/A/1507/2/imagick93351435823901_o.jpg"
                    />
                    <CardContent>
                      <Typography variant="body2">
                        其实狗狗身体本身就会存在各式各样的酶，来帮助机体消化以及吸收营养。不过随着某些食物摄入量地减少，某些酶的活性就会变得越来...
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">分享</Button>
                      <Button size="small">收藏</Button>
                    </CardActions>
                  </Card>
                </SwiperSlide>
              </Swiper>
            </Grid>
            <Grid item md={6} lg={6} xl={6}>
              <Grid container spacing={2} className="article-items">
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article2"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/7/imagick45181623054318_s.png"
                    title="猫咪驱虫多久一次合适？标准答案来咯！！"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick74731622797580_s.png"
                    title="铲屎官看过来，狗狗驱虫药走心分享"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick78041622797452_s.png"
                    title="养狗课堂：狗身上的跳蚤怎么去除"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick27321622797311_s.png"
                    title="五年铲屎官的走心分享，狗狗体外驱虫"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick12481622797152_s.png"
                    title="拜宠爽好用吗？养狗老手告诉你"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick47871622794886_s.png"
                    title="给小狗狗驱虫 有这个必要吗？怎么驱？"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick94461622794744_s.png"
                    title="狗感染心丝虫有多可怕？心丝虫的知识你真要了解一下"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={3} lg={3} xl={3}>
              <List dense className="faq-list">
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="狗狗不吃东西怎么办"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="一个月大左右的金毛能和幼儿奶粉吗"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="一个月大左右的金毛能和幼儿奶粉吗"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="狗狗的疫苗问题"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="关于驱虫问题"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="点蚊香对狗狗有影响吗？"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="舌下囊肿"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="狗舌下囊肿"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="宝宝不吃饭怎么办"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="狗狗总睡觉"/>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
        <Box component="section">
          <Typography component="h5" variant="h5">
            <b className="section-label">狗狗百科</b><Link to="#" className="more-articles">更多 >></Link>
          </Typography>
          <Divider/>
          <Grid container spacing={2}>
            <Grid item md={3} lg={3} xl={3}>
              <Swiper
                id="HomeSectionSwiper"
                modules={[Navigation, Pagination, A11y]}
                slidesPerView={1}
                navigation
              >
                <SwiperSlide>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image="http://img.boqiicdn.com/Data/BK/A/1507/2/imagick44411435805398_o.jpg"
                    />
                    <CardContent>
                      <Typography variant="body2">
                        为狗狗做好驱虫工作不只是为了防止某些寄生虫对我们的健康造成影响，更主要的是因为寄生虫对于狗狗的危害来的更大，而且寄生虫不...
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">分享</Button>
                      <Button size="small">收藏</Button>
                    </CardActions>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image="http://img.boqiicdn.com/Data/BK/A/1507/3/imagick49061435888730_o.jpg"
                    />
                    <CardContent>
                      <Typography variant="body2">
                        为狗狗做好驱虫工作不只是为了防止某些寄生虫对我们的健康造成影响，更主要的是因为寄生虫对于狗狗的危害来的更大，而且寄生虫不...
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">分享</Button>
                      <Button size="small">收藏</Button>
                    </CardActions>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image="http://img.boqiicdn.com/Data/BK/A/1507/2/imagick93351435823901_o.jpg"
                    />
                    <CardContent>
                      <Typography variant="body2">
                        其实狗狗身体本身就会存在各式各样的酶，来帮助机体消化以及吸收营养。不过随着某些食物摄入量地减少，某些酶的活性就会变得越来...
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">分享</Button>
                      <Button size="small">收藏</Button>
                    </CardActions>
                  </Card>
                </SwiperSlide>
              </Swiper>
            </Grid>
            <Grid item md={6} lg={6} xl={6}>
              <Grid container spacing={2} className="article-items">
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/21/imagick62161624259276_s.png"
                    title="7个方法教你猫跳蚤怎么去除更彻底！"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article2"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/7/imagick45181623054318_s.png"
                    title="猫咪驱虫多久一次合适？标准答案来咯！！"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick74731622797580_s.png"
                    title="铲屎官看过来，狗狗驱虫药走心分享"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick78041622797452_s.png"
                    title="养狗课堂：狗身上的跳蚤怎么去除"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick27321622797311_s.png"
                    title="五年铲屎官的走心分享，狗狗体外驱虫"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick12481622797152_s.png"
                    title="拜宠爽好用吗？养狗老手告诉你"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick47871622794886_s.png"
                    title="给小狗狗驱虫 有这个必要吗？怎么驱？"
                  />
                </Grid>
                <Grid item md={6} lg={6} xl={6}>
                  <ArticleItem
                    id="article1"
                    src="http://img.boqiicdn.com/Data/BK/A/2106/4/imagick94461622794744_s.png"
                    title="狗感染心丝虫有多可怕？心丝虫的知识你真要了解一下"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={3} lg={3} xl={3}>
              <List dense className="faq-list">
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="狗狗不吃东西怎么办"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="一个月大左右的金毛能和幼儿奶粉吗"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="一个月大左右的金毛能和幼儿奶粉吗"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="狗狗的疫苗问题"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="关于驱虫问题"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="点蚊香对狗狗有影响吗？"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="舌下囊肿"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="狗舌下囊肿"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="宝宝不吃饭怎么办"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon><ArticleIcon/></ListItemIcon>
                  <ListItemText primary="狗狗总睡觉"/>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}