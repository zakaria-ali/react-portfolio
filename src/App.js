import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
    <About></About>
    <Resume></Resume>
    <Experience></Experience>
    <Services></Services>
    <Portfolio></Portfolio>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
}

export default App;
