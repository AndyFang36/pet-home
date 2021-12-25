import {Box, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography} from "@mui/material";
import {Article as ArticleIcon} from "@mui/icons-material";
import {ArticleItem} from "../../common/components/ArticleItem";

export const HomePage = () => {
  return (
    <Container>
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
        <Box component="section">
          <Typography component="small" variant="small">
              用关爱与呵护谱写的养宠百科，全面的养宠知识满足所需，专业的宠物医生在线解答，为爱宠健康生活保驾护航。波奇——全面关爱宠物生活！
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}