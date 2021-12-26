import React from 'react';
import {useState} from "react";
import {Box, Button, Card, CardContent, CardMedia, Checkbox, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, Tooltip, Typography} from "@mui/material";
import {
  AccountBox as AccountBoxIcon,
  Check as CheckIcon,
  Error as ErrorIcon,
  Lock as LockIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon, People as PeopleIcon
} from "@mui/icons-material";
import LoginImg from "../../assets/images/login.jpg";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../features/loginStateSlice";
import {Link, useNavigate} from "react-router-dom";

/** 登录界面 */
export const LoginPage = () => {
  const navigation =useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state["loginState"].loggedIn);
  const [values, setValues] = useState({account: "", password: "", agreeTerm: false});
  const [errors, setErrors] = useState({account: "", password: "", agreeTerm: ""});
  const [pwdVisibility, setPwdVisibility] = useState(false);
  const [open, setOpen] = useState(false);

  const handleBlur = (prop) => () => {

  }

  const handleChange = (prop) => (e) => {
    const value = (prop === "agreeTerm" ? e.target.checked : e.target.value);
    setValues({...values, [prop]: value});
    // 校验字段
    const regExp = /^[a-zA-Z0-9_-]{4,100}$/;
    switch (prop) {
      case "account":
        if (!regExp.test(value)) {
          setErrors({...errors, account: "账号格式错误！"});
        } else {
          setErrors({...errors, account: ""});
        }
        break;
      case "password":
        if (!regExp.test(value)) {
          setErrors({...errors, password: "密码格式错误！"});
        } else {
          setErrors({...errors, password: ""});
        }
        break;
      case "agreeTerm":
        value === false ?
          setErrors({...errors, agreeTerm: "必须同意协议才能登录！"}) :
          setErrors({...errors, agreeTerm: ""});
        break;
      default:
        return false;
    }
  };

  const validate = () => {
    return (values.account === "" || values.password === "" || !values.agreeTerm || errors.account !== "" || errors.password !== "");
  }

  const resetForm = () => {
    setValues({account: "", password: "", agreeTerm: false});
    setErrors({account: "", password: "", agreeTerm: ""});
  }

  const submitForm = (e) => {
    e.preventDefault();
    // 模拟登录
    localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
    dispatch(login());
  }

  if (loggedIn) {
    navigation("http://www.pethome.com:3002/");
  } else {
    return (
      <Container id="LoginPageContainer">
        <Grid container justifyContent="center">
          <Grid item>
            <Card id="LoginCard" elevation={2}>
              <CardMedia component="img" height="200" image={LoginImg} alt="login image"/>
              <CardContent>
                <Typography component="h4" variant="h4" align="center">
                  <PeopleIcon sx={{verticalAlign: "middle", fontSize: "inherit"}}/> 用户登录
                </Typography>
                <Box component="form" id="LoginForm">
                  <Grid container direction="column" spacing={1.2}>
                    {/* 用户名 */}
                    <Grid item>
                      <FormControl className="form-control" error={errors.account !== ""}>
                        <InputLabel htmlFor="component-outlined">账号</InputLabel>
                        <OutlinedInput
                          id="component-outlined"
                          value={values.account}
                          onChange={handleChange("account")}
                          onBlur={handleBlur("account")}
                          label="账号"
                          placeholder="教工号 / 管理员"
                          startAdornment={<AccountBoxIcon/>}
                          endAdornment={
                            values.account === "" ? null :
                              errors.account === "" ? <CheckIcon color="success"/> : <ErrorIcon color="error"/>
                          }
                        />
                        <FormHelperText className="form-helper-text">{errors.account}</FormHelperText>
                      </FormControl>
                    </Grid>
                    {/* 密码 */}
                    <Grid item>
                      <FormControl className="form-control" error={errors.password !== ""}>
                        <InputLabel htmlFor="outlined-adornment-password">密码</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          label="密码"
                          type={pwdVisibility ? "text" : "password"}
                          value={values.password}
                          onChange={handleChange("password")}
                          onBlur={handleBlur("password")}
                          placeholder="请输入密码"
                          startAdornment={<LockIcon/>}
                          endAdornment={<InputAdornment position="end">
                            <IconButton
                              onClick={() => {setPwdVisibility(!pwdVisibility)}}
                              onMouseDown={(e) => {e.preventDefault()}}
                              edge="end"
                            >
                              {pwdVisibility ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                            </IconButton>
                          </InputAdornment>}
                        />
                        <FormHelperText className="form-helper-text">{errors.password}</FormHelperText>
                      </FormControl>
                    </Grid>
                    {/* 协议与条款 */}
                    <Grid item>
                      <FormControl className="form-control" error={errors.agreeTerm !== ""}>
                        <FormControlLabel
                          control={<Tooltip title="请阅读并同意" arrow placement="top">
                            <Checkbox checked={values.agreeTerm} onChange={handleChange("agreeTerm")}/>
                          </Tooltip>}
                          label={<span>
                            我已阅读并同意
                            <Button onClick={() => {setOpen(true)}}>《服务条款》</Button>和
                            <Button onClick={() => {setOpen(true)}}>《隐私政策》</Button>
                          </span>}
                        />
                        <FormHelperText className="form-helper-text">{errors.agreeTerm}</FormHelperText>
                      </FormControl>

                      <Dialog
                        maxWidth="md"
                        open={open}
                        onClose={() => {setOpen(false)}}
                        scroll="paper"
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                      >
                        <DialogTitle id="scroll-dialog-title">服务条款</DialogTitle>
                        <DialogContent dividers>
                          <DialogContentText
                            id="scroll-dialog-description"
                            tabIndex={-1}
                          >
                            {[...new Array(50)]
                              .map(
                                () => `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                              ).join('\n')}
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={() => {setOpen(false)}} variant="contained" disableElevation>关闭</Button>
                        </DialogActions>
                      </Dialog>
                    </Grid>
                    {/* 提交与重置 */}
                    <Grid item>
                      <Stack id="login-form-buttons" direction="row" justifyContent="space-evenly" spacing={3}>
                        <Button type="reset" onClick={resetForm} variant="contained">清空</Button>
                        <Button type="submit" onClick={submitForm} disabled={validate()} variant="contained">登录</Button>
                        <Link to="/register">还没有账号？<Button type="button" variant="contained">点击注册</Button></Link>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  }
}