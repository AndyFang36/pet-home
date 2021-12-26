import {Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Paper, Typography} from "@mui/material";
import {Article as ArticleIcon, BeachAccess, Image, QuestionAnswer as QuestionAnswerIcon, Work} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";
import {useScrollToTop} from "../../common/utils/useScrollToTop";
/** images */
import CatBanner from "../../assets/images/banners/cat/cat.jpg";
import Ragdoll from "../../assets/images/cats/ragdoll.jpg";
import BritishShorthair from "../../assets/images/cats/british-shorthair.jpg";
import DragonLi from "../../assets/images/cats/dragon-li.jpg";
import JapaneseBobtail from "../../assets/images/cats/japanese-bobtail.jpg";
import ExoticShorthair from "../../assets/images/cats/exotic-shorthair.jpg";
import Persian from "../../assets/images/cats/persian.jpg";
import Siamese from "../../assets/images/cats/siamese.jpg";
import CanadianHairless from "../../assets/images/cats/canadian-hairless.jpg";
import ScottishFold from "../../assets/images/cats/scottish-fold.jpg";
import Sphynx from "../../assets/images/cats/sphynx.jpg";
import RussianBlue from "../../assets/images/cats/russian-blue.jpg";
import Chinchilla from "../../assets/images/cats/chinchilla.jpg";


export const CatPage = () => {
  useScrollToTop();

  const navigate = useNavigate();
  const handlePetClick = (param) => (e) => {
    navigate("/introductions/" + param);
  }

  return (
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
        <Grid item xs={0} sm={0} md={4} lg={4} xl={4} component="nav" sx={{border: "medium dashed red"}}>
          <Typography variant="h6" component="h6">宠物专题</Typography>
          <Divider/>
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
      <Box className="main-content" component="section">
        <Box mb={5} className="hot-pet-box">
          <Typography component="h5" variant="h5">热门宠物</Typography>
          <Divider/>
          <Grid container className="hot-pets" spacing={2}>
            <Grid item xs={6} sm={4} md={2} lg={2} xl={2} className="hot-pet">
              <Card onClick={handlePetClick("cat/ragdoll")}>
                <CardActionArea>
                  <CardMedia component="img" alt="布偶猫" image={Ragdoll}/>
                  <CardContent className="hot-pet-card-label">
                    <Typography variant="h6" component="h6">布偶猫</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2} lg={2} xl={2} className="hot-pet">
              <Card onClick={handlePetClick("british-shorthair")}>
                <CardActionArea>
                  <CardMedia component="img" alt="英国短毛猫" image={BritishShorthair}/>
                  <CardContent className="hot-pet-card-label">
                    <Typography variant="h6" component="h6">英国短毛猫</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2} lg={2} xl={2} className="hot-pet">
              <Card onClick={handlePetClick("dragon-li")}>
                <CardActionArea>
                  <CardMedia component="img" alt="中国狸花猫" image={DragonLi}/>
                  <CardContent className="hot-pet-card-label">
                    <Typography variant="h6" component="h6">中国狸花猫</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2} lg={2} xl={2} className="hot-pet">
              <Card onClick={handlePetClick("japanese-bobtail")}>
                <CardActionArea>
                  <CardMedia component="img" alt="日本短尾猫" image={JapaneseBobtail}/>
                  <CardContent className="hot-pet-card-label">
                    <Typography variant="h6" component="h6">日本短尾猫</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2} lg={2} xl={2} className="hot-pet">
              <Card onClick={handlePetClick("exotic-shorthair")}>
                <CardActionArea>
                  <CardMedia component="img" alt="异国短毛猫" image={ExoticShorthair}/>
                  <CardContent className="hot-pet-card-label">
                    <Typography variant="h6" component="h6">异国短毛猫</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2} lg={2} xl={2} className="hot-pet">
              <Card onClick={handlePetClick("persian")}>
                <CardActionArea>
                  <CardMedia component="img" alt="波斯猫" image={Persian}/>
                  <CardContent className="hot-pet-card-label">
                    <Typography variant="h6" component="h6">波斯猫</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2} lg={2} xl={2} className="hot-pet">
              <Card onClick={handlePetClick("siamese")}>
                <CardActionArea>
                  <CardMedia component="img" alt="暹罗猫" image={Siamese}/>
                  <CardContent className="hot-pet-card-label">
                    <Typography variant="h6" component="h6">暹罗猫</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2} lg={2} xl={2} className="hot-pet">
              <Card onClick={handlePetClick("canadian-hairless")}>
                <CardActionArea>
                  <CardMedia component="img" alt="加拿大无毛猫" image={CanadianHairless}/>
                  <CardContent className="hot-pet-card-label">
                    <Typography variant="h6" component="h6">加拿大无毛猫</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2} lg={2} xl={2} className="hot-pet">
              <Card onClick={handlePetClick("scottish-fold")}>
                <CardActionArea>
                  <CardMedia component="img" alt="苏格兰折耳猫" image={ScottishFold}/>
                  <CardContent className="hot-pet-card-label">
                    <Typography variant="h6" component="h6">苏格兰折耳猫</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2} lg={2} xl={2} className="hot-pet">
              <Card onClick={handlePetClick("sphynx")}>
                <CardActionArea>
                  <CardMedia component="img" alt="斯芬克斯猫" image={Sphynx}/>
                  <CardContent className="hot-pet-card-label">
                    <Typography variant="h6" component="h6">斯芬克斯猫</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2} lg={2} xl={2} className="hot-pet">
              <Card onClick={handlePetClick("russian-blue")}>
                <CardActionArea>
                  <CardMedia component="img" alt="俄罗斯蓝猫" image={RussianBlue}/>
                  <CardContent className="hot-pet-card-label">
                    <Typography variant="h6" component="h6">俄罗斯蓝猫</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2} lg={2} xl={2} className="hot-pet">
              <Card onClick={handlePetClick("chinchilla")}>
                <CardActionArea>
                  <CardMedia component="img" alt="金吉拉" image={Chinchilla}/>
                  <CardContent className="hot-pet-card-label">
                    <Typography variant="h6" component="h6">金吉拉</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Grid container className="pets-articles">
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8} paddingRight={2}>
            <Box component="section" mb={2}>
              <Typography component="h5" variant="h5">猫咪饲养</Typography>
              <Divider/>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">金吉拉怎么能判断是不是定型了？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">如何训练孟加拉豹猫，谈一谈你的看法呢？ </label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">暹罗猫9斤左右算瘦吗？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">金吉拉呼吸很重是生病了吗？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">买金吉拉的时候需要注意哪些？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
              </Grid>
            </Box>
            <Box component="section" mb={2}>
              <Typography component="h5" variant="h5">猫咪医疗</Typography>
              <Divider/>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
              </Grid>
            </Box>
            <Box component="section" mb={2}>
              <Typography component="h5" variant="h5">猫咪训练</Typography>
              <Divider/>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Link to="/articles/article1">
                    <ArticleIcon/>&nbsp;<label className="article-item-label">猫驱虫指南来喽！新手如何正确地给猫驱虫？</label>
                    <time>2021-02-22</time>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
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
  );
}