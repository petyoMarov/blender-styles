import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Home,
  ImageColorization,
  NeuralStyle,
  ToonifyYourself,
  SuperResolution,
  PageNotFound
} from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/image-colorizer">
          <ImageColorization />
        </Route>
        <Route path="/neural-style">
          <NeuralStyle />
        </Route>
        <Route path="/toonify-yourself">
          <ToonifyYourself />
        </Route>
        <Route path="/super-resolution">
          <SuperResolution />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
