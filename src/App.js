import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/Home/Home";
import Detail from "./components/Details/Details";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/item/:id" component={Detail} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
