import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './components/ErrorPage';
import Users from './pages/Users';
import HomePage from './pages/HomePage';

function App() {
  return (    
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/users' element={<Users />}></Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}



export default App;
