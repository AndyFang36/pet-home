import {Avatar, Box, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Pagination, Paper, Typography} from "@mui/material";
import {EmojiObjects, QuestionAnswer} from "@mui/icons-material";
import {useScrollToTop} from "../../common/utils/useScrollToTop";
import {Routes, Route} from "react-router-dom";
import {QuestionDisplay} from "../../common/components/QuestionDisplay";

/** 问答页面 */
export const FAQPage = () => {
  useScrollToTop();

  return (
    <Container id="FAQPage">
      <Grid container>
        <Grid item md={8} lg={8} xl={8}>
          <Routes>
            <Route index element={
              <Paper sx={{padding:"1rem"}}>
                <Box id="QuestionBox">
                  <Typography component="h5" variant="h5"><QuestionAnswer/>两个多月的小猫生病</Typography>
                  <Divider/>
                  <Typography component="p" variant="body1">精神状态不好，一直在睡觉，眼睛睁不开，嘴角有点烂，吃东西的时候感觉很难下咽，舌头的前半部分是白色的。</Typography>
                  <Typography component="p" variant="body2">丹青墨 提问于 2017-05-23 23:18:18</Typography>
                </Box>
                <Divider/>
                <Box id="AnswerBox">
                  <Typography><EmojiObjects/>共3回复</Typography>
                  <Divider/>
                  <List>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://www.mui.com/static/images/avatar/1.jpg"/>
                      </ListItemAvatar>
                      <ListItemText
                        primary={<Typography>
                          <b>Brunch this weekend? 0支持 0回复</b>
                          <small style={{float: "right"}}><time>2021-12-25 23:18:18</time></small>
                        </Typography>}
                        secondary={<Typography sx={{display: 'inline'}} component="span" variant="body2">
                          Ali Connors— I'll be in your neighborhood doing errands this…
                          "I'll be in your neighborhood doing errands this
                          "I'll be in your neighborhood doing errands this
                          "I'll be in your neighborhood doing errands this"
                          Ali Connors— I'll be in your neighborhood doing errands this…
                          "I'll be in your neighborhood doing errands this
                          "I'll be in your neighborhood doing errands this
                          "I'll be in your neighborhood doing errands this"
                        </Typography>}
                      />
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="https://www.mui.com/static/images/avatar/2.jpg"/>
                      </ListItemAvatar>
                      <ListItemText
                        primary={<Typography>
                          <b>Brunch this weekend? 0支持 0回复</b>
                          <small style={{float: "right"}}><time>2021-12-25 23:18:18</time></small>
                        </Typography>}
                        secondary={<Typography sx={{display: 'inline'}} component="span" variant="body2">
                          Ali Connors— I'll be in your neighborhood doing errands this…
                          "I'll be in your neighborhood doing errands this
                          "I'll be in your neighborhood doing errands this
                          "I'll be in your neighborhood doing errands this"
                          Ali Connors— I'll be in your neighborhood doing errands this…
                          "I'll be in your neighborhood doing errands this
                          "I'll be in your neighborhood doing errands this
                          "I'll be in your neighborhood doing errands this"
                        </Typography>}
                      />
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="https://www.mui.com/static/images/avatar/3.jpg"/>
                      </ListItemAvatar>
                      <ListItemText
                        primary={<Typography>
                          <b>Brunch this weekend? 0支持 0回复</b>
                          <small style={{float: "right"}}><time>2021-12-25 23:18:18</time></small>
                        </Typography>}
                        secondary={<Typography sx={{display: 'inline'}} component="span" variant="body2">
                          Ali Connors— I'll be in your neighborhood doing errands this…
                          "I'll be in your neighborhood doing errands this
                          "I'll be in your neighborhood doing errands this
                          "I'll be in your neighborhood doing errands this"
                          Ali Connors— I'll be in your neighborhood doing errands this…
                          "I'll be in your neighborhood doing errands this
                          "I'll be in your neighborhood doing errands this
                          "I'll be in your neighborhood doing errands this"
                        </Typography>}
                      />
                    </ListItem>
                  </List>
                </Box>
                <Divider sx={{margin:"1rem 0"}}/>
                <Pagination count={10} color="primary" className="pagination"/>
              </Paper>
            }/>
            <Route path="/faq/:questionId" element={<QuestionDisplay/>}/>
          </Routes>
        </Grid>
        <Grid item md={4} lg={4} xl={4}>推荐文章</Grid>
      </Grid>
    </Container>
  );
}