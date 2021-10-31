import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Tours from './components/Tours/Tours';
import Destination from './components/Destination/Destination';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Details from './components/Details/Details';
import DashBoard from './components/DashBoard/DashBoard';
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path='/tours'>
              <Tours></Tours>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/destination'>
              <Destination></Destination>
            </Route>
            <Route path='/about'>
              <About></About> </Route>
            <Route path='/contact'>
              <Contact></Contact></Route>
              <PrivateRoute exact path="/tour_details/:id">
            <Details></Details>
          </PrivateRoute>
          <Route>
            <DashBoard path='/dashboard'></DashBoard>
          </Route>
            <Route path='*'>
              <NotFound></NotFound> </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
