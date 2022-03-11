import Card from '../components/Card';
import { useSelector } from "react-redux";
import Header from "./Header";
import './style.scss';

export const News = () => {
  const user = useSelector((state: any) => state.user);
  return (
    <>
    <Header/>
    <div className="CardItems">
    {
      user === null || localStorage.getItem("userInfo") === null ? ( <h1>Siz ro'yhatdan o'tmadingiz.</h1>) : (<Card/>) 
    }
     </div>
    </>
  );
};
