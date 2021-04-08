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
        <Route exact path="/blender-styles/">
          <Home />
        </Route>
        <Route path="/blender-styles/image-colorizer">
          <ImageColorization />
        </Route>
        <Route path="/blender-styles/neural-style">
          <NeuralStyle />
        </Route>
        <Route path="/blender-styles/toonify-yourself">
          <ToonifyYourself />
        </Route>
        <Route path="/blender-styles/super-resolution">
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
