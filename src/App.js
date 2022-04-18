import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Blogs from './Pages/Home/Blogs/Blogs';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>

      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
