import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import Reviews from './components/Pages/Reviews/Reviews';
import Login from './components/Pages/Login/Login';
import Appointment from './components/Pages/Appointment/Appointment';
import Navbar from './components/Header/Navbar';
import NotFound from './components/Pages/NotFound/NotFound';
function App() {
  return (
      <div className='max-w-[1440px] mx-auto'>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/reviews' element={<Reviews/>}/>
            <Route path='/appointment' element={<Appointment/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>

      </div>
  );
}

export default App;
