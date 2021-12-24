import {Box, Divider, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export const Footer = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Box>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem/>}
          spacing={2}
        >
          <Link to="">关于波奇</Link>
          <Link to="">投资者关系</Link>
          <Link to="">诚聘英才</Link>
          <Link to="">联系我们</Link>
          <Link to="">网站地图</Link>
          <Link to="">意见反馈</Link>
          <Link to="">帮助中心</Link>
          <Link to="">最新文章</Link>
        </Stack>
      </Box>
      <Typography>xxx</Typography>
      <Typography>xxx</Typography>
      <Typography>xxx</Typography>
      <Typography>xxx</Typography>
    </Stack>
  );
}