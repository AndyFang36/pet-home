import {Box, Container, Divider, Link as Anchor, Stack, Typography} from "@mui/material";

export const Footer = () => {
  return (
    <Box component="footer" padding="1rem 0">
      <Container>
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
              <Anchor href="#">关于波奇</Anchor>
              <Anchor href="#">投资者关系</Anchor>
              <Anchor href="#">诚聘英才</Anchor>
              <Anchor href="#">联系我们</Anchor>
              <Anchor href="#">网站地图</Anchor>
              <Anchor href="#">意见反馈</Anchor>
              <Anchor href="#">帮助中心</Anchor>
              <Anchor href="#">最新文章</Anchor>
            </Stack>
          </Box>
          <Box>
            <Typography>沪公网安备 31011502004955号 |沪ICP备13034501号-2| 增值电信业务经营许可证： 沪B2-20140120</Typography>
            <Typography>Copyright © 2007- 2021 Boqii.com All Rights Reserved 光橙（上海）信息科技有限公司 版权所有</Typography>
          </Box>
          <Box>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Anchor href="http://wap.scjgj.sh.gov.cn/businessCheck/verifKey.do?showType=extShow&amp;serial=9031000020200804110320000006173852-SAIC_SHOW_310000-20131022163114962238&amp;signData=MEUCIQCxAhT2yp7CGYeqT3Nzy3yKKs+8PiJPEXXe40scDQIh5QIgQxGCEwLzNES+bsFkNBbDioZIDWffBlMmuTmGn4zlaQw=" target="_blank" rel="nofollow"><img src="//a.boqiicdn.com/Images/public/foot_gs.png" width="100" height="35"/></Anchor>
              <Anchor href="http://www.boqii.com/ads.php" target="_blank" rel="nofollow"><img src="//a.boqiicdn.com/Images/public/foot_cx.png" width="100" height="35" alt=""/></Anchor>
              <Anchor href="https://ss.knet.cn/verifyseal.dll?sn=e14111831011556282oicb000000&amp;ct=df&amp;a=1&amp;pa=0.1636424780320953" target="_blank" rel="nofollow"><img src="//a.boqiicdn.com/Images/public/foot_kx.png" width="100" height="35"/></Anchor>
              <Anchor href="http://www.zx110.org/" target="_blank" rel="nofollow"><img src="//a.boqiicdn.com/Images/public/foot_zx.png" width="100" height="35" alt=""/></Anchor>
              <Anchor href="http://www.shjbzx.cn/" rel="nofollow" target="_blank"><img src="http://h5.boqiicdn.com/accusation-v2.png" width="100" height="35" alt=""/></Anchor>
            </Stack>
          </Box>
          <Typography>违法和不良信息举报电话：021-68826169|举报邮箱：zhengls@boqii.com</Typography>
          <Typography>如网民接到962110电话，请立即接听</Typography>
        </Stack>
      </Container>
    </Box>
  );
}