import {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import {Avatar, Button, Container, Tooltip} from "@mui/material";
import LogoImg from "../../assets/images/logo.svg";
import {useDispatch, useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";


const settings = ['Profile', 'Account', 'Dashboard', '退出登录'];

export const Header = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state["loginState"].loggedIn);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Typography variant="h5" noWrap component="h5" sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}>
            <Box component="img" id="Logo" src={LogoImg} alt="logo"/>宠物之家
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{vertical: 'bottom', horizontal: 'left',}}
              keepMounted
              transformOrigin={{vertical: 'top', horizontal: 'left',}}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{display: {xs: 'block', md: 'none'},}}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">首页</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">首页</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">首页</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">首页</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">关于</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography variant="h6" noWrap component="h6" sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            宠物之家
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            <NavLink to="/"><Button onClick={handleCloseNavMenu}>首页</Button></NavLink>
            <NavLink to="/dog"><Button onClick={handleCloseNavMenu}>狗狗</Button></NavLink>
            <NavLink to="/cat"><Button onClick={handleCloseNavMenu}>猫咪</Button></NavLink>
            <NavLink to="/pet"><Button onClick={handleCloseNavMenu}>小宠</Button></NavLink>
            <NavLink to="/aquarium"><Button onClick={handleCloseNavMenu}>水族</Button></NavLink>
            <NavLink to="/plant"><Button onClick={handleCloseNavMenu}>植物</Button></NavLink>
            <NavLink to="/faq"><Button onClick={handleCloseNavMenu}>问答专区</Button></NavLink>
            <NavLink to="/about"><Button onClick={handleCloseNavMenu}>关于</Button></NavLink>
          </Box>
          {/********** 我的 ************/}
          {
            loggedIn ?
              (<Box sx={{flexGrow: 0}}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                    <Avatar alt="Remy Sharp" src="https://www.mui.com/static/images/avatar/2.jpg"/>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{mt: '45px'}}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{vertical: 'top', horizontal: 'right',}}
                  keepMounted
                  transformOrigin={{vertical: 'top', horizontal: 'right',}}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>) :
              (<Link to="/login"><Button color="inherit">登录/注册</Button></Link>)
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}