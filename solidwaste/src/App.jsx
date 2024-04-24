import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import About from './components/About'
import Home from './components/Home'
import Contribute from './components/Contribute'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();


  return (
    <>
     <NavBar/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="contribute" element={<Contribute/> } />
     </Routes>
    </>
  )
}

export default App
