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
import Services from './Components/Services/Services';
import Header from './Components/Shared/Header/Header';
import 'swiper/swiper-bundle.min.css'
import './Components/Responsive.css'
// swiper core styles
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import Projects from './Components/Projects/Projects';
import ProjectReview from './Components/ProjectReview/ProjectReview';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
      

        <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/project/:id' element={<ProjectReview></ProjectReview>}></Route>
        
        <Route path='/project/:id' element={<ProjectReview></ProjectReview>}></Route>
        <Route path='/project/:id' element={<ProjectReview></ProjectReview>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
      </Routes>
      <Footer></Footer>
      </Router>

     
    </div>
  );
}

export default App;
