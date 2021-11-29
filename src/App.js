import logo from './logo.svg';
import './App.css';
import Banner from './Components/Home/Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/Home/About/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Skills from './Components/Home/Skills/Skills';
import Project from './Components/Project/Project';

function App() {
  return (
    <div className="App">
      <Router>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Project></Project>
        <Routes>
       
      </Routes>
      </Router>

     
    </div>
  );
}

export default App;
