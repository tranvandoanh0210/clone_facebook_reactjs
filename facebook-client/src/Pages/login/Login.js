import { useState, useContext } from "react";
import {
  Box,
  Grid,
  Container,
  Typography,
  FormControl,
  TextField,
  Button,
} from "@material-ui/core";
import "./Login.scss";
import Signup from "../../Components/Signup/Signup";
import { SignIn } from "../../Apis/Auth";
import CircularProgress from "@material-ui/core/CircularProgress";
import { AppContenxt } from "../../ContextApi/AppContext";
import { HanldleErr } from "../../Utils/Utils";

const Login = () => {
  const { dispatchUser } = useContext(AppContenxt);
  const [user, setUser] = useState({});
  const [signupModal, setSignupModal] = useState(false);
  const [Err, setErr] = useState("");
  const [waiting, setWaiting] = useState(false);
  //get data from inputs
  const userForm = (e, field) => {
    setUser({ ...user, [field]: e.target.value });
  };
  // handle submit form
  const HandleSumbit = async (e) => {
    e.preventDefault();
    setWaiting(true);
    setErr("");
    await SignIn(user)
      .then((res) => {
        localStorage.setItem("AccessToken", res.data.token);
        setWaiting(false);
        dispatchUser({ type: "LOGIN", payload: res.data });
        window.location.replace("/");
        // Navigate('/')
      })
      .catch((err) => {
        setWaiting(false);
        setErr(err.response.data.message);
        HanldleErr(err);
      });
  };
  // to close sign up modal when click outside form
  // window.onclick = () => {
  //     setSignupModal(false);
  // }
  return (
    <Box className="Login">
      {signupModal && <Signup open={setSignupModal} />}
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <img
              className="logo"
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt="logo"
              width="300px"
            />
            <Typography variant="h4">
              Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
              của bạn.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              className="form"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <FormControl fullWidth className="MuiForm">
                <TextField
                  onChange={(e) => userForm(e, "email")}
                  variant="outlined"
                  placeholder="Email hoặc số điện thoại"
                  autoComplete="true"
                  required
                  error={Err.length ? true : false}
                />
                <TextField
                  type="password"
                  onChange={(e) => userForm(e, "password")}
                  variant="outlined"
                  placeholder="Mật khẩu"
                  autoComplete="false"
                  required
                  error={Err.length ? true : false}
                />
                <Typography color="secondary" align="center" display="block">
                  {Err}
                </Typography>{" "}
                <br />
                <Button
                  type="submit "
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={HandleSumbit}
                >
                  {" "}
                  {waiting ? <CircularProgress /> : "Đăng nhập"}{" "}
                </Button>
              </FormControl>
              <a
                className="forget"
                href="#"
                color="primary"
                align="center"
                variant="caption"
              >
                Quên mật khẩu ?
              </a>
              <Button
                disabled={waiting}
                variant="contained"
                className="newAcc"
                onClick={(e) => {
                  e.stopPropagation();
                  setSignupModal(true);
                }}
              >
                Tạo tài khoản mới
              </Button>
            </Box>
            <Typography className="" align="center" variant="caption">
              <a href="#" style={{ fontWeight: "bold" }}>
                Tạo Trang
              </a>{" "}
              dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Login;
