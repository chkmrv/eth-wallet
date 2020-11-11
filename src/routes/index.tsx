/* eslint react/prefer-stateless-function: 0 */
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import App from "./App";

class IndexRoute extends React.Component {
  render() {
    return (
      <BrowserRouter {...this.props}>
        <Switch>
          <Route path="/" component={App} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default IndexRoute;
