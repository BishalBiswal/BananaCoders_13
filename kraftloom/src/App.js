import './App.css';
import { useState } from 'react';
import Kurti from './kurti.js'
import Home from './Home.js';
import Saree from './saree'
import Necklace from './necklace'
import Umbrella from './umbrella'
import RugsandCarpet from './rugsandcarpet'
import Bag from './bag'
import Shop from './shop';
import { BrowserRouter as Router, Route, Routes, Switch, link, BrowserRouter } from 'react-router-dom'
import { FaCartPlus, FaHeadset, FaHome, FaListUl, FaPenNib, FaPhoneAlt, FaUserAlt } from 'react-icons/fa';
import Bot from './Bot';
import SignUp from './login';
import SignIn from './login2';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/kurti" element={<Kurti />} />
          <Route exact path="/saree" element={<Saree />} />
          <Route exact path="/umbrella" element={<Umbrella />} />
          <Route exact path="/rugsandcarpet" element={< RugsandCarpet />} />
          <Route exact path="/bag" element={<Bag />} />
          <Route exact path="/necklace" element={<Necklace />} />
        </Routes>
      </BrowserRouter>



    </>
  );
}

export default App;
