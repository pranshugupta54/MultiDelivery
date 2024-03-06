import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>             
      </Router>
    </>
  )
}

export default App
