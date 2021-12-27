import {Avatar, Box, Breadcrumbs, Button, Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Stack, Typography} from "@mui/material";
import {Article as ArticleIcon, BeachAccess, Grain, Home, Image, QuestionAnswer as QuestionAnswerIcon, Work} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";
import {useScrollToTop} from "../../common/utils/useScrollToTop";
import hotDogs from "../data/dogs-hot.json";
import articles from "../data/articles.json";

export const DogPage = () => {
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
            <Grain sx={{mr: 0.5}} fontSize="inherit"/>狗狗
          </Typography>
        </Breadcrumbs>
      </Container>
      <Container maxWidth={false} sx={{margin: "1rem 0"}}><Divider/></Container>
      <Container id="CatPage">
        <Grid container component="section" className="banner" paddingBottom={3}>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8} paddingRight={2}>
            <Box className="banner-box">
              <Box component="img" src="http://img.boqiicdn.com/Data/U/P/img42075b98d8e5a14f0.jpg" alt="cat banner"/>
              <Box className="banner-label">
                <Typography component="h6" variant="h6">爱的引导：导盲犬乘地铁，遇见请别害怕我</Typography>
                <Typography component="p" variant="subtitle2">
                  5月1日，《北京市轨道交通运营安全条例》将正式实施，该条例明确规定，视力残障者可携带导盲犬进站乘车，这意味着，一直以来导盲...
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
                <ListItemText primary="狗狗聪明度排行榜TOP30全解析" secondary="我们都知道猫咪的饲养最好的方式就是圈养，如果允许猫咪外出，可说是危险程度极..."/>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar><Work/></Avatar>
                </ListItemAvatar>
                <ListItemText primary="冬季到了，巧主人为狗狗量体裁衣吧" secondary="由于市面上可供选择的猫粮并不多，所以很多猫爸猫妈都会自制猫粮来让猫咪们享受到..."/>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar><BeachAccess/></Avatar>
                </ListItemAvatar>
                <ListItemText primary="我很二，但是我很温柔——哈士奇养成记" secondary="很多主人一经发现猫咪不使用猫砂盆就用“武力”解决问题，殊不知这样做不仅不..."/>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Box className="main-content" component="section">
          <Box mb={5} className="hot-pet-box">
            <Typography component="h5" variant="h5">热门宠物</Typography>
            <Divider/>
            <Grid container className="hot-pets" spacing={2}>
              {hotDogs.map((dog, index) => (
                <Grid item xs={6} sm={4} md={2} lg={2} xl={2} className="hot-pet" key={"hot-dog" + index}>
                  <Card onClick={handlePetClick(dog.path)}>
                    <CardActionArea>
                      <CardMedia component="img" alt={dog.label} image={dog.img}/>
                      <CardContent className="hot-pet-card-label">
                        <Typography variant="h6" component="h6">{dog.label}</Typography>
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
                  <b className="section-label">狗狗饲养</b><Link to="#" className="more-articles">更多 >></Link>
                </Typography>
                <Divider/>
                <Grid container spacing={1}>
                  {articles.dog.feeding.map(article => (
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={"dog-feeding-" + article.id}>
                      <Link to="/articles/dog/feeding/1">
                        <ArticleIcon/>&nbsp;<label className="article-item-label">{article.title}</label>
                        <time>{article.date}</time>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box component="section" mb={2} id="CatMedical">
                <Typography component="h5" variant="h5">
                  <b className="section-label">狗狗医疗</b><Link to="#" className="more-articles">更多 >></Link>
                </Typography>
                <Divider/>
                <Grid container spacing={1}>
                  {articles.dog.medical.map(article => (
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={"dog-medical-" + article.id}>
                      <Link to="/articles/dog/medical/1">
                        <ArticleIcon/>&nbsp;<label className="article-item-label">{article.title}</label>
                        <time>{article.date}</time>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box component="section" mb={2} id="CatTraining">
                <Typography component="h5" variant="h5">
                  <b className="section-label">狗狗训练</b><Link to="#" className="more-articles">更多 >></Link>
                </Typography>
                <Divider/>
                <Grid container spacing={1}>
                  {articles.dog.training.map(article => (
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={"dog-medical-" + article.id}>
                      <Link to="/articles/dog/training/1">
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