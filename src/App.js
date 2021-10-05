import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route,PrivateRoute, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Programs from './components/Programs/Programs';
import StudentSuccess from './components/StudentSuccess/StudentSuccess';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Switch>
      <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/programs">
         <Programs></Programs>
        </Route>
        <Route path="/studentSuccess">
         <StudentSuccess></StudentSuccess>
        </Route>
        <Route path="/aboutUs">
          <AboutUs></AboutUs>
        </Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
