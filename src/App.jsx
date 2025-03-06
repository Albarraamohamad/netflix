import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Series from './Components/Series';
import Movies from './Components/Movies';
import NewPopular from './Components/NewPopular';
import MyList from './Components/MyList';
import BrowsebyLanguages from "./Components/BrowsebyLanguages";
import Children from "./Pages/Children";
import Login from "./Pages/Login";
import Require from "./Pages/Require";
import Signin from "./Pages/Signin";

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/NewPopular" element={<NewPopular />} />
        <Route path="/MyList" element={<MyList />} />
        <Route path="/BrowsebyLanguages" element={<BrowsebyLanguages />} />
        <Route path="/Children" element={<Children/>} />
        <Route path="/Require" element={<Require/>} />
        <Route path="/Signin" element={<Signin/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
