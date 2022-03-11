
import { useSelector as useReduxSelector, TypedUseSelectorHook } from "react-redux";
import UserForm from "../components/UserForm";
import { RootState } from "../store";
import { Home } from "./HomeScreen";
import "./style.scss";
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const LoginScreen: React.FC = () => {

  const user = useSelector((state: any) => state.user);
  
  return (
    <>{
      user === null || localStorage.getItem("userInfo") === null ? 
        <UserForm/> 
        : 
       <Home/>
      
    }
     
    </>
  );
};

export default LoginScreen;

