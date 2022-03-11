import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const logoutHandler = () => {
    dispatch({
      type: "USER_LOGOUT",
    });
    localStorage.clear();
    navigate("/login");
  };
  const user = useSelector((state: any) => state.user);

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Company name
          </Typography>
          <nav>
            {user ? (
              <>
                <Link to="/"><Button variant="outlined">Home</Button></Link>

                <Link to="/news"><Button sx={{ mr: 3, ml: 3 }} variant="outlined">News</Button></Link>

                <Link to="/login" >
                  <Button variant="contained" onClick={logoutHandler}>LogOut</Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/"><Button variant="outlined">Home</Button></Link>

                <Link to="/news"><Button sx={{ mr: 3, ml: 3 }} variant="outlined">News</Button></Link>

                <Link to="/login"><Button variant="contained">Login</Button></Link>
              </>
            )}
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
