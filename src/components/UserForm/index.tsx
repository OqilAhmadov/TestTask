import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";


const theme = createTheme();

type FormValues = {
  username: string;
  password: number;
};

const UserForm: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  let admin = {
    username: "admin",
    password: "123",
  };

  const dispatch = useDispatch();

  const SubmitHandler = (event: any) => {
    if (event.username === admin.username && event.password === admin.password) {
      localStorage.setItem("userInfo", JSON.stringify(event));
      alert("Tizimga xush kelibsiz");
      // window.location.assign("/news");
      // navigate("/news");
      dispatch({
        type: "USER_LOGIN",
        payload: event,
      });
    } else {
      alert("User nomi yoki parol noto'g'ri");
    }
  };

  

  return (
    <>
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit(SubmitHandler)} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    fullWidth
                    id="firstName"
                    label="Username"
                    autoFocus
                    {...register("username", {
                      required: "Username kiritilmagan",
                      maxLength: {
                        value: 5,
                        message: "Username 6 ta belgidan iborat bo'lishi kerak",
                      },
                    })}
                  />
                  {errors?.username && (
                    <span className="erMessage">{errors?.username.message}</span>
                  )}
                </Grid>
                <Grid item xs={16}>
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    {...register("password", {
                      required: "Password kiritilmagan",
                      minLength: {
                        value: 2,
                        message: "Password 10 ta belgidan iborat bo'lishi kerak",
                      },
                    })}
                  />
                  {errors?.password && (
                    <span className="erMessage">{errors?.password.message}</span>
                  )}
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider> 
     
    </>
  );
};

export default UserForm;

