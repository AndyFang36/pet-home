import {Box, Container, Divider, ImageList, ImageListItem, Stack, Typography} from "@mui/material";
import {useScrollToTop} from "../../common/utils/useScrollToTop";

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

export const AboutPage = () => {
  useScrollToTop();

  return(
    <Container>
      <Stack component="article">
        <Typography>关于波奇</Typography>

        波奇控股有限公司（纽约证券交易所代码：BQ）是中国领先的以宠物为中心的平台，我们是中国领先的在线宠物用品供应商，为用户提供广泛，优质且高性价比的产品和服务，包括全球知名品牌、国内新兴品牌，以及自有品牌。公司的线上销售平台，包括波奇商城以及在第三方电商平台上的旗舰店，为用户提供了便捷的购物渠道，和种类丰富的高品质宠物产品，用户在波奇宠物可以享受个性化的购物体验。波奇宠物社区为用户提供了一个信息丰富的交互平台来分享他们对宠物养育的热爱与心得。

        <Typography variant="h5">波奇历程</Typography>
        <Divider/>
        2008年创立波奇社区，同期波奇商城上线
        2014年波奇宠物APP正式发布
        2015年推出自有品牌怡亲Yoken
        2015年引入SaaS解决方案，提高门店运营效率
        2017年投资入股高端宠物食品生产工厂青岛双安
        2018年推出自有高端品牌魔咖Mocare
        2018年启动波奇宠物会员计划
        2019年入股派多格，布局线下宠物领域
        2020年推出直播和短视频，进一步丰富宠物内容生产，增强用户互动与参与度
        2020年正式登陆纽约证券交易所，成中国宠物生态平台第一股

        <Typography variant="h5">业务矩阵</Typography>
        <Divider/>
        波奇社区
        2300万注册用户，为用户提供了种类丰富的产品，以及客户第一的高质量服务。
        波奇社群
        精准分类，涵盖品牌、地区、活动、会员、品种、高活跃微信社群。
        新媒体矩阵
        覆盖自媒体粉丝总数160w+，形成波奇整体对外的声量和势能，让更多不同行业、不同维度的受众，认识到波奇的商业价值和社会价值。
        MCN
        为客户提供高水准、高质量、高产出的短视频节目及其他媒体的延展，如植入型广告、微电影等创意视频制作，为客户提供优质的品牌推广。截止2020年6月30日，波奇社区签约KOL账号约860个，用户平均月交互次数为3.34亿次。
        品牌合作
        已和超过570个行业主流知名宠物品牌合作。
        波奇商城
        截至2020年6月30日，平台SKU过17853，快送全国各地。超过4320万笔在线订单。与国内外570个知名品牌建立合作或独家合作关系，坚持与行业正品合作，得到品牌方及用户一致好评。
        自有平台
        拥有波奇宠物APP、波奇商城小程序、PC端波奇网。
        会员
        提升用户购物体验 建立贴心一站式会员服务
        神奇卡：享受会员价、固定折扣、购物节、生日特权四大权益，提供更贴心的一站式会员服务。
        神奇黑卡：尊享10大权益，会员价、固定折扣、会员日、生日特权、200个波奇豆/月、包邮券、好礼分享券、专享客服、1波奇豆换购、神奇森林。
        主流电商平台合作
        跨渠道打造宠物类目冠军，连续七年获类目冠军。2020年双十一全平台GMV总额超过2.44亿元。
        高端制造
        投资入股双安科技，拥有8年宠物食品研发生产经验，9年有机食品制造技术，经国际有机农业联盟IFOAM成员认证，执行中国有机产品标准与国际有机标准，生产全过程严格遵循有机认证要求，确保整体生产环节的卫生、无污染，提供真正高品质高营养的健康食品。
        进口食品药品批文审核
        与中牧集团签署战略合作协议，围绕深化宠物服务合作主题,在宠物食品、保健、医疗、电商运营、销售渠道、资本运作等方面建立合作关系,在产品研发、生产管理、产品注册、物流仓储、网络资源联动、渠道整合、医疗保健、相关新业态等业务范围开展合作。
        宠物加盟连锁及从业人员培训
        千万美元投资入股派多格，派多格是目前中国宠物行业最大的加盟连锁品牌及人员培训机构，是经过国家相关部门认定的唯一一家培训宠物培训人才机构，向业内众多宠物品牌点输送宠物人才，被称作“宠物界的黄埔军校”。
        宠物活体
        入股专业活体繁殖企业懿宠，懿宠专注宠物活体繁殖，拥有专业团队、科学繁育体系，培育出健康优质、遗传稳定的活体。位于江苏的繁殖基地经过相关政府部门审查，拥有农业农村局颁发的动物防疫条件合格证。同时，在上海建立了宠物乐园，集训练、活体展示和售后服务为一体，为宠物提供全面健康保障。
        SaaS系统
        全国销售渠道拓展 搭建专有SaaS解决方案，250+个城市，超过15000家宠物实体店和宠物医院。覆盖一线及核心城市，辐射全国。为品牌商制定品牌成长策略、内容营销方式、线下分销策略、以及产品定价和库存管理。
        仓储物流
        全国五大仓储，三个履约中心。与多家知名物流服务商合作，向客户提供快速可靠的配送服务。凭借庞大的配送网络，使我们能够在24小时或更短的时间将货品送达中国部分地区，为客户提供便捷的送货上门购物体验。
        自有品牌
        高品质自有品牌输出，匠心打造优质产品。拥有怡亲、魔咖、优倍滋、多可特等多个品牌。截止2020年6月30日，波奇提供约2,130个SKU的自有品牌产品。始终以专业、专注、匠心、严谨的精神，致力于为更多养宠家庭提供更安心、更优质的产品。
        创新零售
        拥有会员订阅、波奇拼团、内容短视频、直播电商等创新零售模式，加速宠物消费再升级。

        <Typography variant="h5">荣誉之路</Typography>
        2020年浦东电商“抗击疫情、保障民生”突出贡献奖
        2018—2019年上海市电商示范企业
        2018年“艾澌克宠物食品”和衷共济奖
        2018年“中宠股份”优秀合作伙伴
        2018年浦东新区独角兽企业
        2017年浦东新区电商十佳示范企业
        2017年度科技部“独角兽百强企业
        2016—2017年度上海市电商示范企业
        2016年度科技部“独角兽百强企业”
        2014年度搜狗搜索授予”最佳宠物电商平台“
        2014IRIS（中国）授予“突出贡献奖”
        2014中国互联网经济论坛“最具影响力行业价值奖”
        2009年度电子商务风云榜“十大新锐明星企业”

        <Typography variant="h5">媒体报道</Typography>

        波奇宠物获2020年中国宠物产业文化发展「最佳社交媒体影响力奖」
        https://baijiahao.baidu.com/s?id=1690835148411815488&wfr=spider&for=pc
        波奇宠物任命首席战略官
        https://baijiahao.baidu.com/s?id=1689620347855469811&wfr=spider&for=pc
        垂类生态平台价值思考 波奇宠物会成为下一个Chewy吗？｜未来访谈
        https://www.mbachina.com/html/cjzx/202012/277663.html
        牵手线下巨头派多格，波奇宠物用长期主义打开线下想象空间
        https://www.thepaper.cn/newsDetail_forward_9279383
        波奇宠物上市首日市值6.53亿美元，宠物赛道的头部效应已日趋凸显
        https://baijiahao.baidu.com/s?id=1679316792139421379&wfr=spider&for=pc

        <Box id="PhotosWall" component="section">
          <Typography variant="h5">照片墙</Typography>
          <Divider/>
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Stack>
    </Container>
  );
}