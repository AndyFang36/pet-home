import {Avatar, Box, Breadcrumbs, Button, Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {Article as ArticleIcon, BeachAccess, Grain, Home, Image, QuestionAnswer as QuestionAnswerIcon, Work} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";
import {useScrollToTop} from "../../common/utils/useScrollToTop";
import CatBanner from "../../assets/images/banners/cat/cat.jpg";
import hotCats from "../data/cats-hot.json";
import articles from "../data/articles.json";

export const CatPage = () => {
  useScrollToTop();

  const navigate = useNavigate();
  const handlePetClick = (param) => (e) => {
    navigate("/introductions/" + param);
  }

  return (
    <>
      <Container maxWidth={false} className="breadcrumb">
        <Typography variant="body1" component="span" marginRight={1}>当前位置:</Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/"><Home sx={{mr: 0.5}} fontSize="inherit"/>主页</Link>
          <Typography sx={{display: 'flex', alignItems: 'center'}}>
            <Grain sx={{mr: 0.5}} fontSize="inherit"/>猫咪
          </Typography>
        </Breadcrumbs>
      </Container>
      <Container maxWidth={false} sx={{margin: "1rem 0"}}><Divider/></Container>
      <Container id="CatPage">
        <Grid container component="section" className="banner" paddingBottom={3}>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8} paddingRight={2}>
            <Box className="banner-box">
              <Box component="img" src={CatBanner} alt="cat banner"/>
              <Box className="banner-label">
                <Typography component="h6" variant="h6">征服喵星人——揭秘猫咪训练技巧</Typography>
                <Typography component="p" variant="subtitle2">
                  对于主人们来说，训练猫咪简直就是一个巨大的挑战，喵星人们总是以世界之王的姿态自居，于是主人不再是主人，一夜之间沦为猫奴，...
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={0} sm={0} md={4} lg={4} xl={4} component="nav">
            <Typography variant="h6" component="h6">宠物专题</Typography>
            <Divider/>
            <List sx={{width: '100%', bgcolor: 'background.paper'}} dense>
              <ListItem>
                <ListItemAvatar>
                  <Avatar><Image/></Avatar>
                </ListItemAvatar>
                <ListItemText primary="室内养猫安全手册" secondary="我们都知道猫咪的饲养最好的方式就是圈养，如果允许猫咪外出，可说是危险程度极..."/>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar><Work/></Avatar>
                </ListItemAvatar>
                <ListItemText primary="猫咪美食DIY" secondary="由于市面上可供选择的猫粮并不多，所以很多猫爸猫妈都会自制猫粮来让猫咪们享受到..."/>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar><BeachAccess/></Avatar>
                </ListItemAvatar>
                <ListItemText primary="猫咪为什么不使用猫砂盆" secondary="很多主人一经发现猫咪不使用猫砂盆就用“武力”解决问题，殊不知这样做不仅不..."/>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Box className="main-content" component="section">
          <Box mb={5} className="hot-pet-box">
            <Typography component="h5" variant="h5">热门宠物</Typography>
            <Divider/>
            <Grid container className="hot-pets" spacing={2}>
              {hotCats.map((cat, index) => (
                <Grid item xs={6} sm={4} md={2} lg={2} xl={2} className="hot-pet" key={"hot-cat" + index}>
                  <Card onClick={handlePetClick(cat.path)}>
                    <CardActionArea>
                      <CardMedia component="img" alt={cat.label} image={cat.img}/>
                      <CardContent className="hot-pet-card-label">
                        <Typography variant="h6" component="h6">{cat.label}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Grid container className="pets-articles">
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8} paddingRight={2}>
              <Box component="section" mb={2} id="CatFeeding">
                <Typography component="h5" variant="h5">
                  <b className="section-label">猫咪饲养</b><Link to="#" className="more-articles">更多 >></Link>
                </Typography>
                <Divider/>
                <Grid container spacing={1}>
                  {articles.cat.feeding.map(article => (
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={"cat-feeding-" + article.id}>
                      <Link to="/articles/cat/feeding/1">
                        <ArticleIcon/>&nbsp;<label className="article-item-label">{article.title}</label>
                        <time>{article.date}</time>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box component="section" mb={2} id="CatMedical">
                <Typography component="h5" variant="h5">
                  <b className="section-label">猫咪医疗</b><Link to="#" className="more-articles">更多 >></Link>
                </Typography>
                <Divider/>
                <Grid container spacing={1}>
                  {articles.cat.medical.map(article => (
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={"cat-medical-" + article.id}>
                      <Link to="/articles/cat/medical/1">
                        <ArticleIcon/>&nbsp;<label className="article-item-label">{article.title}</label>
                        <time>{article.date}</time>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box component="section" mb={2} id="CatTraining">
                <Typography component="h5" variant="h5">
                  <b className="section-label">猫咪训练</b><Link to="#" className="more-articles">更多 >></Link>
                </Typography>
                <Divider/>
                <Grid container spacing={1}>
                  {articles.cat.training.map(article => (
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={"cat-medical-" + article.id}>
                      <Link to="/articles/cat/training/1">
                        <ArticleIcon/>&nbsp;<label className="article-item-label">{article.title}</label>
                        <time>{article.date}</time>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            {/* 侧边栏 */}
            <Grid item xs={0} sm={0} md={4} lg={4} xl={4} component="aside" className="aside faq">
              <Typography component="h6" variant="h6">专家答题</Typography>
              <Divider/>
              <List>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon><QuestionAnswerIcon/></ListItemIcon>
                    <ListItemText primary="我的猫是什么病？"/>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon><QuestionAnswerIcon/></ListItemIcon>
                    <ListItemText primary="给猫咪换了新猫砂后不在上面拉粑粑"/>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon><QuestionAnswerIcon/></ListItemIcon>
                    <ListItemText primary="两个多月的小猫生病"/>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon><QuestionAnswerIcon/></ListItemIcon>
                    <ListItemText primary="母猫产后怎么补充营养？"/>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon><QuestionAnswerIcon/></ListItemIcon>
                    <ListItemText primary="母猫产后心跳很快，还会喘气"/>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon><QuestionAnswerIcon/></ListItemIcon>
                    <ListItemText primary="两个月奶猫呕吐，吐酸水"/>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon><QuestionAnswerIcon/></ListItemIcon>
                    <ListItemText primary="刚一个月大的小猫一天该吃多少奶粉"/>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon><QuestionAnswerIcon/></ListItemIcon>
                    <ListItemText primary="猫咪尾巴笔直的一根不能弯曲，还有以下问题不知道是否健康"/>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon><QuestionAnswerIcon/></ListItemIcon>
                    <ListItemText primary="猫咪是遗传还是感冒"/>
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider/>
              <Button variant="contained" sx={{backgroundColor: "limegreen", float: "right"}}>问答专区</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}