
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import './fonts/CloisterBlack.ttf';
import './fonts/OldLondon.ttf'


function App() {
  return (
    
    <div className="App">
      <NavBar />

    <Home />

      <Footer />
    </div>
   
  );
}

export default App;
