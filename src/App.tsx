import { Provider } from 'react-redux';
import {store} from '././store';
import { Routes, Route } from "react-router-dom";
import {Home} from './pages/HomeScreen';
import {News} from './pages/NewsScreen';
import LoginScreen from './pages/LoginScreen';


function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
     </Provider>

  );
}

export default App;
