import {Container, Grid, Link as Anchor, List, ListItem, ListItemIcon, ListItemText, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import {Article as ArticleIcon} from "@mui/icons-material";
import {Article} from "../../common/components/Article";
import {useParams} from "react-router-dom";
import articles from "../../app/data/articles.json"
import {useScrollToTop} from "../../common/utils/useScrollToTop";

export const ArticlePage = () => {
  useScrollToTop();

  const {kind, category, id} = useParams();
  const article = articles[kind][category].find(article => article.id === id);

  return (
    <Container>
      <Grid container direction="row" spacing={1}>
        <Grid item md={8} lg={8} xl={8}>
          <Article article={article}/>
        </Grid>
        <Grid item md={4} lg={4} xl={4} component="aside">
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}>
            <Box>
              <Anchor href="http://shop.boqii.com/zhuanti/684.html?utm_source=baidu-seopc" target="_blank">
                <Box className="ad" component="img" src="http://img.boqiicdn.com/Data/U/P/img5912591272eb87a0a.jpg"/>
              </Anchor>
            </Box>
            <Box>
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
            </Box>
            <Box>
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
            </Box>
            <Box>
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
            </Box>
            <Box>
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
            </Box>
            <Box>
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
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}