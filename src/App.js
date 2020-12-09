import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Influences from './pages/Influences';
import About from './pages/About';
import Exercises from './pages/Exercises';
import Contact from './pages/Contact';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/influences" component={Influences} />
          <Route path="/exercises" component={Exercises} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
