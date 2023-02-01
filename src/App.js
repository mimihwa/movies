import React from 'react';
import Home from './routes/Home';
import Navigation from './components/Navigation'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './routes/About';
import Detail from './routes/Detail';


const App = (props) => {
  return (
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='About' element={<About/>} />
          <Route path='/detail/:id' element={<Detail/>} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;