import './App.css'
import Navbar from './components/Navbar';
import Cart from './components/page/Cart'
import DashBoard from './components/page/DashBoard'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Navbar/>
 <Routes>
        <Route path="/" element={<DashBoard/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
