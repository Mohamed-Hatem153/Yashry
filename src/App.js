import React from "react";
import { Footer } from "./components";
import { Products, SingleProduct, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Products />
        </Route>
        <Route exact path="/products/:id" children={<SingleProduct />} />
        <Route path="*" exact>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
