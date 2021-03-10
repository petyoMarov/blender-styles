import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/image-colorizer">
          <Home />
        </Route>
        <Route exact path="/neural-style">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
