import './App.css';
import About from './About';
import Navigation from './Navigation';
import Academics from './Academics';
import Cocurricular from './Cocurricular';
import Gallery from './Gallery';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app-body">
        <Navigation/>
        <Switch>
          <Route path="/" exact component={About} />     {/*the exact helps to ensure that no other page is opened*/}
          <Route path="/about" component={About} />
          <Route path="/academics" component={Academics} />
          <Route path="/co-curricular" component={Cocurricular} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
