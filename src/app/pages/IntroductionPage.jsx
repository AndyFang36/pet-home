import {Box, buttonUnstyledClasses, Container, Divider, Grid, ImageList, ImageListItem, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, styled, TabPanelUnstyled, TabsListUnstyled, TabsUnstyled, TabUnstyled, tabUnstyledClasses, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {MenuBook as MenuBookIcon, ReportGmailerrorredOutlined} from "@mui/icons-material";
import cats from "../data/cats.json";
import dogs from "../data/dogs.json";
import {grey} from "@mui/material/colors";
import {useState} from "react";

const green = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
};
const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${green[400]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    color: #fff;
    outline: none;
    background-color: ${green[200]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${green[50]};
    color: ${green[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;
const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${green[500]};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

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

export const IntroductionPage = () => {
  const {kind, pet} = useParams();
  // console.log(kind + " -> " + pet);

  const [currentTab, setCurrentTab] = useState(0);
  console.log(currentTab);

  return (
    <Container id="IntroductionPage">
      <Grid container spacing={2}>
        <Grid item md={8} lg={8} xl={8} component="article">
          <Paper>
            <Typography variant="h5">中国狸花猫</Typography>
            <Grid container id="BasicIntroBox">
              <Grid item lg={8} xl={8}>
                <Grid container padding={2} spacing={3}>
                  <Grid item xs={12} sm={10} md={6} lg={6} xl={5}>
                    <Typography component="p">英文名：Dragon Li</Typography>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={6} xl={5}>
                    <Typography component="p">性 格：性格沉稳，感情丰富</Typography>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={6} xl={5}>
                    <Typography component="p">祖 籍：中国</Typography>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={6} xl={5}>
                    <Typography component="p">易患病：消化系统与眼部的疾病</Typography>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={6} xl={5}>
                    <Typography component="p">寿 命：10--15岁</Typography>
                  </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={6} xl={5}>
                    <Typography component="p">价 格：2000--5000</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={4} xl={4} padding={2}>
                <Box sx={{border: "1rem solid white"}} component="img" src="http://img.boqiicdn.com/Data/BK/P/imagick43321542249438.jpg" alt=""/>
              </Grid>
            </Grid>
            <TabsUnstyled defaultValue={0}>
              <TabsList>
                <Tab onClick={() => setCurrentTab(0)}>基本信息栏</Tab>
                <Tab onClick={() => setCurrentTab(1)}>词条相册</Tab>
                <Tab onClick={() => setCurrentTab(2)}>其他相关</Tab>
              </TabsList>
              <TabPanel value={0}>
                <Box id="DetailIntroBox" component="article" padding={3}>
                  <Box component="section" id="kind">
                    <Typography component="h6" variant="h6"><MenuBookIcon/>暹罗猫品种介绍</Typography>
                    <Divider/>
                    <Box textAlign="center">
                      <Box width="80%" component="img" src="http://img.boqiicdn.com/Data/BK/A/1407/7/img50111404727569_y.jpg" alt=""/>
                    </Box>
                    <Typography component="p" variant="body1">
                      暹罗猫，又叫泰国猫、西母猫，其英文名为Siamese，起源于14世纪，祖先为非纯种亚洲猫。虽然科学家手中并没有握着暹罗猫来源的证据，但他们相信暹罗猫是从泰国而来。据记载，暹罗猫早在几百年前就生活在泰国的皇宫和寺庙中，之后它们被作为外交礼物而送给其他国家。
                      关于暹罗猫第一次到达亚洲以外的地方，大多数认为是1884年英国驻泰国曼谷领事(1847-1916),从曼谷将一对饲养的暹罗猫Pho和Mia带回英国送给他的姊妹Lilian Jane Veley(以后Veley在1901年也成为了暹罗猫会的创办人之一)。然而翻阅纪录，美国总统莱斯福·凯斯在1878年就收到从曼谷的美国领事馆送来的一只暹罗猫作为礼物。这是第一次有历史记载暹罗猫离开亚洲，比登陆英国还要早了六年，只不过没有繁殖下去而己。1885年 Pho 和Mia 诞下了三只小暹罗猫Duen Ngai，Kalohom 和 Khromata。三只小猫和它们的父母在同年参加于伦敦水晶宫举办的猫展。暹罗猫独特的姿态和举止都带给与会者深刻的印象。不幸地，三只小猫在参展后不久便死了，死因却没有任何的纪录。
                      暹罗猫在泰国还被称为Wichien-maat，即“月亮钻石”的意思，这足以证明当地人对暹罗猫有多重视。据说，过去在泰国皇宫中，暹罗猫还有专人负责起居饮食，即便泰国出现经济危机，它们的生活也完全没有受到任何影响。
                      暹罗猫被很多人看作贵族，但跟另外一种猫中贵族波斯猫相比，它们则明显外向得多，它们活泼好动，一听到主人的声音就会立马回应。如果你希望身边有一只机灵的猫咪能打破无聊又平静的生活，那么暹罗猫一定不会让你失望。至于网上有人问，暹罗猫需不需要遛来消耗它们的体力，专家则表示暹罗猫在家的运动就可以满足身体运动的需求，如果担心暹罗猫活动不够，那就每天多陪它们来点游戏吧。
                    </Typography>
                  </Box>
                  <Divider sx={{margin:"1rem 0"}}/>
                  <Box component="section" id="shape">
                    <Typography component="h6" variant="h6"><MenuBookIcon/>暹罗猫形态特征</Typography>
                    <Box textAlign="center">
                      <Box width="80%" component="img" src="http://img.boqiicdn.com/Data/BK/A/1407/7/img50111404727569_y.jpg" alt=""/>
                    </Box>
                    <Typography component="p" variant="body1">
                      暹罗猫的长相跟普通猫咪实在相差太多，所以很多人一见到这种猫咪就不会再忘记。由于越来越多的人开始关注这种猫咪，所以很多商家也开始引进暹罗猫。不过在利益的驱使下，不少不良商家会以次充好欺骗消费者，为了避免出现这样的情况，大家在选购暹罗猫前一定要做足功课，真正了解暹罗猫的形态特征到底有哪些！
                    </Typography>
                  </Box>
                  <Divider sx={{margin:"1rem 0"}}/>
                  <Box component="section" id="personality">
                    <Typography component="h6" variant="h6"><MenuBookIcon/>暹罗猫性格特点</Typography>
                    <Box textAlign="center">
                      <Box width="80%" component="img" src="http://img.boqiicdn.com/Data/BK/A/1407/7/img50111404727569_y.jpg" alt=""/>
                    </Box>
                    <Typography component="p" variant="body1">
                      很多人虽然没有见过暹罗猫，但可能已经从别人的口中得知暹罗猫非常的活泼，它们拥有一副大嗓门，有时吵到甚至会让人忍无可忍。不少人不禁要问，暹罗猫真的是这样一种猫咪吗？如果真的如此，为什么还有那么多人想要养暹罗猫呢？我们不妨来看看暹罗猫真正的的性格特点到底如何。

                      一、暹罗猫有事没事就会大叫？

                      严格说来，并不是每只暹罗猫的嗓门都很大，其实很多养了暹罗猫的家长会发现，它们并没有影响到自己的正常生活。虽然暹罗猫的嗓音不是特别讨喜，它们的声音不像波斯猫那样温柔甜美，但只要主人训练得当，它们不会有事没事地乱叫。不过如果猫咪处于发情期，那么它们可能会比平时更爱叫，主人可以在猫咪发情的时候加以安抚，或在适当地时候直接给猫咪做绝育手术，这样它们就不会频繁喊叫了。

                      二、暹罗猫过于活泼？

                      有网友表示暹罗猫是一种非常活泼的猫咪，它们似乎一刻也停不下来。暹罗猫是很活泼，但“一刻也停不下来”的说法未免太过夸张。暹罗猫只是拥有一个外向的性格，当它们希望主人可以多陪自己玩一会时，便会主动索取，而不想有些猫咪一样静静等待主人的“宠幸”。此外，暹罗猫的好奇心很强，它们花在探索的时间很多，这在人们看来，它们的精力好像怎么也用不完，因此便给它们扣上过于活泼的帽子。

                      三、暹罗猫不亲人？

                      暹罗猫虽然很聒噪，但它们却很亲人，而且如果长时间没有主人的陪伴，暹罗猫会郁闷很长一段时间。暹罗猫的智商很高，除了加拿大无毛猫外，几乎没有猫咪能与它们匹敌，也因为这个特点，暹罗猫很容易被训练，当然前提是主人的训练方法得当。一旦学会某些技能，暹罗猫便能自如地运用到生活中。
                    </Typography>
                  </Box>
                  <Divider sx={{margin:"1rem 0"}}/>
                  <Box component="section" id="maintenance">
                    <Typography component="h6" variant="h6"><MenuBookIcon/>暹罗猫养护知识</Typography>
                    <Box textAlign="center">
                      <Box width="80%" component="img" src="http://img.boqiicdn.com/Data/BK/A/1407/7/img50111404727569_y.jpg" alt=""/>
                    </Box>
                    <Typography component="p" variant="body1">
                      在过去，暹罗猫是只有贵族才能饲养的宠物，但现在，暹罗猫却走进了千家万户。为了让暹罗猫更好的生活，不少主人无所不用其极，不过养护暹罗猫并不是一味地靠给它们最好的食物和居住环境，适合它们的才是最好的。想要养好暹罗猫，主人必须做好以下几个工作：

                      一、饮食健康合理

                      除了要让猫咪补充全面的营养外，主人还必须注意一点，罐头等软食并不能锻炼猫咪的牙齿，如果长期吃软粮可能会让猫咪更容易患上牙结石的疾病。为了避免这种情况的出现，主人要控制好猫咪干粮和湿粮的比例。此外，主人也不要抱有侥幸心理让猫咪吃一些不该吃的食物，要知道如果出现任何问题，猫咪需要承受很大的痛苦。

                      二、梳毛修指甲一个都不能少

                      梳毛的好处有三点：1.及时发现猫咪身上是否有伤口、寄生虫等；2.刺激猫咪血液循环，让猫咪拥有一个健康的身体；3.清除未脱落的死毛，防止猫咪在清洁身体时吞入过多毛发。

                      修剪指甲可以避免猫咪抓伤人或其他动物、抓坏家具等。为了更顺利的给猫咪剪指甲，主人一定要坚持“快、准、狠”的原则，如果无法一次剪完猫咪的指甲，可以留到下一次再剪。

                      三、频繁洗澡不是好事

                      猫咪本身就是有洁癖的动物，所以它们不会让自己的身体处于脏乱的状态。不过这并不代表主人就可以不用给猫咪洗澡清洁身体，定期给猫咪洗澡可以去除它们身上的灰尘和异味，减少疾病发生的几率等。但洗澡的频率一定要控制好，一般情况下，每月洗一次澡就可以达到清洁猫咪身体的效果。如果过于频繁地洗澡，猫咪身体油脂平衡可能会被打破，这样反而不利于猫咪皮肤和毛发的健康。

                      四、特殊时期的养护

                      当猫咪在特殊时期（幼年、老年、怀孕等）时，主人需要给予特殊的关怀。

                      1.当猫咪有猫妈妈照顾时，主人可以不用担心它们的食物及其他问题。不过一旦猫咪断奶，主人则要开始担起照顾幼猫的责任，因为幼猫胃容量较小，但它们又需要大量的营养和热量，所以少食多餐是喂食它们的标准。

                      2.老年猫咪除了要补充足够的营养外，其食物也要做出相应的改变——增加软食的比例、减少干粮的比例。此外，老年猫咪的食欲可能也会变差，主人可以定期给猫咪准备一点其他食物来刺激一下它们的食欲。

                      3.当猫咪处于怀孕期时，主人可能要额外给猫咪补充营养元素以保证母体和胎儿的健康生长；当猫咪分娩后，主人则要帮助母猫做好照顾幼猫的工作等，比如当母猫没有奶水或奶水不够时，主人就要购买猫咪专用奶粉来给幼猫冲泡。
                    </Typography>
                  </Box>
                  <Divider sx={{margin:"1rem 0"}}/>
                  <Box component="section" id="feeding">
                    <Typography component="h6" variant="h6"><MenuBookIcon/>暹罗猫喂食要求</Typography>
                    <Box textAlign="center">
                      <Box width="80%" component="img" src="http://img.boqiicdn.com/Data/BK/A/1407/7/img50111404727569_y.jpg" alt=""/>
                    </Box>
                    <Typography component="p" variant="body1">
                      一般情况下，猫粮被分为两种——干粮和湿粮，这两种猫粮各有利弊。为了让暹罗猫吃得更健康，主人们也是下了不少苦功，比如大家都知道干粮可以摩擦猫咪的牙齿，降低猫咪患上牙结石的概率，而湿粮的含水量较高，对于不爱喝水的喵星人来说，吃湿粮既能满足它们对于食物的要求，又能摄取足量的水分，可谓一箭双雕，但经常吃湿粮无益于猫咪牙齿健康，而且有可能导致猫咪变得挑食。在这样的情况下，专家建议主人给猫咪按一定的干湿比例喂食。

                      除了市面上出售的猫粮外，有一部分主人也会自制猫粮给猫咪喂食。自制猫粮的主人需要注意两点：选取合适的食材和满足猫咪的营养需求。在给猫咪准备食材前，主人首先要确定哪些食材对猫咪有益，而哪些食材会让猫咪中毒，选择猫咪能吃的食材是保证猫咪身体健康的第一步。当选定了食材后，主人还要看看食材能否满足猫咪的营养需求，如果不能满足，还要增加其他食材以保证猫咪的健康成长。

                      随着生活水平的日渐提高，主人们不仅仅在主食上为猫咪花心思，他们也会在猫咪的零食上动脑筋。给零食的主人同样也分为两派——直接购买派和自制派。市面上出售的零食是完全按照猫咪的身体状况打造的，这些零食的盐含量和油含量都较低，在保证口味的同时也注重猫咪的健康。而自制零食则属于私人定制服务，猫咪喜欢吃什么就给它们什么，这种零食最容易深得猫心。不管是哪种零食的供应，主人都要控制好量，因为零食供应过多，可能会导致猫咪肥胖、挑食或患上各种疾病等，如果到那时再停止提供零食就太晚了。

                      此外，主人们可能会忽略给猫咪提供猫草，这是防止猫咪出现吞入过多毛发而无法吐出的情况。有些猫咪可能对猫草并不感冒，那么此时主人则可给猫咪喂食化毛膏。为了让猫咪尽可能少地吞入毛发，主人可以每天给猫咪梳毛，以清除猫咪身上未脱落的死毛，避免猫咪直接吞入。
                    </Typography>
                  </Box>
                  <Divider sx={{margin:"1rem 0"}}/>
                  <Typography variant="body1" fontSize="small" textAlign="center">部分文章和图片来源于网络，版权归原作者所有，如有侵权，请联系删除：qiang.zhang@boqii.com</Typography>
                </Box>
              </TabPanel>
              <TabPanel value={1}>
                <Box id="PetPhotosCollections" component="section">
                  <Typography variant="h5">照片墙</Typography>
                  <Divider/>
                  <ImageList cols={3} rowHeight={164}>
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
              </TabPanel>
              <TabPanel value={2}>暂无......</TabPanel>
            </TabsUnstyled>
          </Paper>
        </Grid>
        <Grid item md={4} lg={4} xl={4} component="aside">
          <Stack position="sticky" top="68.5px">
            <Box id="ADBox">
              <img src="http://img.boqiicdn.com/Data/U/P/img74335ad5d294abff6.jpg" alt="xxx"/>
            </Box>
            <Divider sx={{margin: "1rem 0"}}/>
            <Box id="StatisticsBox">
              <Typography variant="h5" component="h5">词条统计</Typography>
              <ul>
                <li>浏览次数：179056</li>
                <li>在分类中排行：7</li>
                <li>相关文章：100966</li>
                <li>相关问答：13</li>
                <li>共有 2 位用户收藏</li>
              </ul>
            </Box>
            <Divider sx={{margin: "1rem 0"}}/>
            {currentTab === 0 ?
              <Box id="DirectoryBox">
                <Typography variant="h5" component="h5">词条目录</Typography>
                <ol>
                  <li><a href="#kind">品种介绍</a></li>
                  <li><a href="#shape">形态特征</a></li>
                  <li><a href="#personality">性格特点</a></li>
                  <li><a href="#maintenance">养护知识</a></li>
                  <li><a href="#feeding">喂食要求</a></li>
                </ol>
              </Box>
              : null
            }
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}