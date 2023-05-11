import {BrowserRouter, Route, Routes} from "react-router-dom"

import './App.css';
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import CarModel from "./components/CarModel";
import BikeModel from "./components/BikeModel";
import Date from "./components/Date";
import Submit from "./components/Submit";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page1/>}></Route>
      <Route path='/Page2' element={<Page2/>}></Route>
      <Route path='/Page3' element={<Page3/>}></Route>
      <Route path='/Page4' element={<Page4/>}></Route>
      <Route path='/carModel' element={<CarModel/>}></Route>
      <Route path='/bikeModel' element={<BikeModel/>}></Route>
      <Route path='/date' element={<Date/>}></Route>
      <Route path='/submit' element={<Submit/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
