import {Avatar, Box, Container, Divider, Stack, Typography} from "@mui/material";

export const ProfilePage = () => {
  return (
    <Container id="ProfilePage">
      <Box>
        <Typography>
          <Avatar
          alt="Remy Sharp"
          src="https://www.mui.com/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />用户名</Typography>
        <Divider/>
        <Typography>基本信息</Typography>
        <Divider/>
        <Stack>
          <Box>用户昵称 666Gazer</Box>
          <Box>用户ID weixin_43945528</Box>
          <Box>性别 男</Box>
          <Box>个人简介 Do one thing at a time, and do well.</Box>
          <Box>所在地区 浙江省-杭州市</Box>
          <Box>出生日期 1999-06-30</Box>
          <Box>开始工作 未选择</Box>
        </Stack>
      </Box>
    </Container>
  );
}