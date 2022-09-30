import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import SignIn from "./SignIn";
import Query from "./Query";

export default function App(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><SignIn /></Route>
        <Route path="/Query"><Query /></Route>
      </Switch>
    </BrowserRouter>
  )
}