/** 问答页面 */
import {Container, Grid} from "@mui/material";

export const FAQPage = () => {
  return(
    <Container maxWidth={false}>
      <Grid container>
        <Grid item md={8} lg={8} xl={8}>狗狗不吃东西怎么办</Grid>
        <Grid item md={4} lg={4} xl={4}>推荐文章</Grid>
      </Grid>
    </Container>
  );
}