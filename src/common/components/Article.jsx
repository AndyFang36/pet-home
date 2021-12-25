import {Box, Divider, Paper, Typography} from "@mui/material";

export const Article = (props) => {
  const {article} = props;

  return (
    <Paper component="article">
      <Typography component="h4" variant="h4">{article.title}</Typography>
      <Typography component="i" variant="caption">{article.time} by {article.author}</Typography>
      <Divider/>
      <Box dangerouslySetInnerHTML={{__html: article.content}}/>
    </Paper>
  );
}