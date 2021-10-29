import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Tours from './components/Tours/Tours';
import Destination from './components/Destination/Destination';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='/tours'>
            <Tours></Tours>
          </Route>
          <Route path='/destination'>
            <Destination></Destination>
          </Route>
          <Route path='/about'>
            <About></About> </Route>
          <Route path='/contact'>
            <Contact></Contact></Route>
          <Route path='*'>
            <NotFound></NotFound> </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
