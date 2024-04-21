import About from './Components/About';
import Gallery from './Components/Gallery';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import {Routes , Route } from 'react-router-dom'
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About />}/>
      <Route path='/gallery' element = {<Gallery />}/>
      <Route path='/login' element = {<Login />}/>
      <Route path='/register' element = {<Register />}/>
     </Routes>
    </div>
  );
}

export default App;
