import {Paper, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import {number, string} from "prop-types";

export const ArticleItem = (props) => {
  const {id, src, title, elevation} = props;

  return (
    <Link to={"/articles/" + id}>
      <Paper sx={{display: "flex"}} elevation={elevation !== undefined ? elevation : 0} {...props}>
        <Box component="img" src={src} alt="" width="40%" maxHeight="5rem"/>
        <Typography component="p" variant="body2" width="60%" pl={1}>{title}</Typography>
      </Paper>
    </Link>
  );
}

ArticleItem.propTypes = {
  id: string.isRequired,
  src: string.isRequired,
  title: string.isRequired,
  elevation: number
}