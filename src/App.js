import {Component} from "react";
import Home from "./home/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Collect from "./collect/Collect";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/collect">
                        <Collect/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
  }
}

export default App;
