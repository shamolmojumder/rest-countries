import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import CountryDetail from './Components/CountryDetail/CountryDetail';

function App() {
 
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/detail/:name">
        <CountryDetail></CountryDetail>
      </Route>
      <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
