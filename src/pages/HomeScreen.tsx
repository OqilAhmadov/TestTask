
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Header from "./Header";
import { useSelector } from "react-redux";
import UserForm from "../components/UserForm";



export const Home = () => {
  const dispatch = useDispatch();
  let navigate: any = useNavigate();

  const LogoutHandler = () => {
    dispatch({
      type: "USER_LOGOUT",
    });
    localStorage.clear();
    // navigate("/login");
  };

  const LoginHandler = () => {
    navigate("/login");

  }

  const user = useSelector((state: any) => state.user);

  return (
    <>
      {user === null || localStorage.getItem("userInfo") === null ?( 
        <UserForm />
      ): (
        <div>
        <Header />
        <h1>Xush kelibsiz...! </h1>
        <Button variant="contained" sx={{ mr: 3, ml: 3 }} onClick={LogoutHandler} endIcon={<DeleteIcon />}>Log Out</Button>
        <Button variant="contained" onClick={LoginHandler} endIcon={<SendIcon />}>Log In</Button>
      </div>
      )  }
    </>
  );
};
