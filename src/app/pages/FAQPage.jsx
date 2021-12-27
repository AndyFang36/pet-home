import {Box, Breadcrumbs, Container, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Pagination, Paper, Typography} from "@mui/material";
import {Grain, Home, QuestionAnswer} from "@mui/icons-material";
import {useScrollToTop} from "../../common/utils/useScrollToTop";
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import {QuestionDisplay} from "../../common/components/QuestionDisplay";
import questions from "../data/questions.json";

/** 问答页面 */
export const FAQPage = () => {
  useScrollToTop();
  const navigation = useNavigate();

  return (
    <>
      <Container maxWidth={false} className="breadcrumb">
        <Typography variant="body1" component="span" marginRight={1}>当前位置:</Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/"><Home sx={{mr: 0.5}} fontSize="inherit"/>主页</Link>
          <Typography sx={{display: 'flex', alignItems: 'center'}}>
            <Grain sx={{mr: 0.5}} fontSize="inherit"/>问答专区
          </Typography>
        </Breadcrumbs>
      </Container>
      <Container maxWidth={false} sx={{margin: "1rem 0"}}><Divider/></Container>
      <Container id="FAQPage">
        <Grid container>
          <Grid item md={8} lg={8} xl={8}>
            <Routes>
              <Route path="/" element={
                <Paper sx={{padding: "1rem"}}>
                  <Typography>问答专区</Typography>
                  <Divider/>
                  <Box>
                    <List>
                      {questions.map(question => (
                        <ListItem disablePadding key={question.id}>
                          <ListItemButton onClick={() => navigation("/faq/" + question.id)}>
                            <ListItemIcon><QuestionAnswer/></ListItemIcon>
                            <ListItemText primary={question.title}/>
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                  <Pagination count={10} color="primary" className="pagination"/>
                </Paper>
              }/>
              <Route path="/:questionId" element={<QuestionDisplay/>}/>
            </Routes>
          </Grid>
          <Grid item md={4} lg={4} xl={4}>推荐文章</Grid>
        </Grid>
      </Container>
    </>
  );
}