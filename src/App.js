
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Homecomponents from './Routes/Homecomponents';
import ProductComponents from './Routes/ProductsComponents'
import ShopComponents from './Routes/ShopComponents'
import LogComponent from './Routes/LogComponent';
import RegisterComponent from './Routes/RegisterComponent';
import CartComponent from './Routes/CartComponent';
import ContactComponent from './Routes/ContactComponent';
import Load from './Components/animationLoad/Load';
import Profile from './Components/HOme/Profile/Profile';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homecomponents/>}/>
      <Route path='/home' element={<Homecomponents/>}/>
      <Route path='/product' element={<ProductComponents/>}/>
      <Route path='/shop' element={<ShopComponents/>}/>
      <Route path='/contact' element={<ContactComponent/>}/>
      <Route path='/load' element={<Load/>}/>
      <Route path='/login' element={<LogComponent/>}/>
      <Route path='/cart' element={<CartComponent/>}/>
      <Route path='/signup' element={<RegisterComponent/>}/>
      <Route path='/profile' element={<Profile/>}/>

    </Routes>
      
    </>
  );
}

export default App;
