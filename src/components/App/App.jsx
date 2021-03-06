import './App.module.scss';
import {Redirect, Route, Switch} from "react-router";
import Home from "../Home/Home";
import Country from "../Country/Country";
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.app}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/go" component={Country} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
