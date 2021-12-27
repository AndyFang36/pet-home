import {Box, Button, Container, Divider, FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, Typography} from "@mui/material";
import RegisterImg from "../../assets/images/register.jpg";
import {AccountBox as AccountBoxIcon, Check as CheckIcon, Error as ErrorIcon, Lock as LockIcon, Visibility as VisibilityIcon, VisibilityOff as VisibilityOffIcon} from "@mui/icons-material";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "../../assets/css/RegisterPage.css";
import {login} from "../../features/loginStateSlice";

/** 注册页面 */
export const RegisterPage = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state["loginState"].loggedIn);
  const [values, setValues] = useState({email: "", password: "", agreeTerm: false});
  const [errors, setErrors] = useState({email: "", password: "", agreeTerm: ""});
  const [pwdVisibility, setPwdVisibility] = useState(false);

  const handleBlur = (prop) => () => {
    if (values[prop]==="") return false;
    // 校验字段
    const regExp = /^[a-zA-Z0-9_-]{4,100}$/;
    switch (prop) {
      case "email":
        if (!regExp.test(values[prop])) {
          setErrors({...errors, email: "邮箱格式错误！"});
        } else {
          setErrors({...errors, email: ""});
        }
        break;
      case "password":
        if (!regExp.test(values[prop])) {
          setErrors({...errors, password: "密码格式错误！"});
        } else {
          setErrors({...errors, password: ""});
        }
        break;
      case "password2":
        values[prop] !== values.password ?
          setErrors({...errors, agreeTerm: "两次密码输入不一致"}) :
          setErrors({...errors, agreeTerm: ""});
        break;
      default:
        return false;
    }
  }

  const handleChange = (prop) => (e) => {
    setValues({...values, [prop]: e.target.value});
  };

  const handleFormSubmit = () => {
    const user = {
      id:"1",
      username:"未命名用户",
      password:values.password,
      sex:"未知",
      address:"未知",
      email:values.email,
      birthday:"2000-01-01",
      introduction:"..."
    };
    localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
    localStorage.setItem("user",JSON.stringify(user));
    dispatch(login());
  }

  if (loggedIn){
    navigation("/");
  }else {
    return (
      <Container id="RegisterPage">
        <Paper>
          <Grid container>
            {/* 图片 */}
            <Grid item xs={0} sm={0} lg={5}>
              <Box component="img" src={RegisterImg} alt="register" width="100%" height="auto"/>
            </Grid>
            {/* 表单 */}
            <Grid item sm={12} lg={7}>
              <Box padding="1rem">
                <Typography variant="h4" textAlign="center">用户注册</Typography>
                <Divider sx={{margin: "1rem 0"}}/>
                <Stack spacing={2}>
                  <FormControl className="form-control" error={errors.email !== ""}>
                    <InputLabel htmlFor="RegisterEmail">邮箱</InputLabel>
                    <OutlinedInput
                      id="RegisterEmail"
                      value={values.email}
                      onChange={handleChange("email")}
                      onBlur={handleBlur("email")}
                      label="邮箱"
                      placeholder="邮箱"
                      startAdornment={<AccountBoxIcon/>}
                      endAdornment={
                        values.email === "" ? null :
                          errors.email === "" ? <CheckIcon color="success"/> : <ErrorIcon color="error"/>
                      }
                    />
                    <FormHelperText className="form-helper-text">{errors.email}</FormHelperText>
                  </FormControl>
                  {/* 密码 */}
                  <Grid item>
                    <FormControl className="form-control" error={errors.password !== ""}>
                      <InputLabel htmlFor="RegisterPwd">密码</InputLabel>
                      <OutlinedInput
                        id="RegisterPwd"
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
                  {/* 密码 */}
                  <Grid item>
                    <FormControl className="form-control" error={errors.password !== ""}>
                      <InputLabel htmlFor="RegisterPwd2">确认密码</InputLabel>
                      <OutlinedInput
                        id="RegisterPwd2"
                        label="确认密码"
                        type={pwdVisibility ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password2")}
                        onBlur={handleBlur("password2")}
                        placeholder="请再次输入密码"
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
                  <Box className="form-buttons">
                    <Button variant="contained">清空</Button>
                    <Button variant="contained" onClick={handleFormSubmit}>注册</Button>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
}