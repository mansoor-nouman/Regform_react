
import './App.css';
import  Registration from './regform';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route path="/" exact="true">
          <Registration></Registration>
          </Route>
          </Router>
      </header>
    </div>
  );
}

export default App;
