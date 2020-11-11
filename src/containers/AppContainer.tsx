import React from "react";
import { Provider } from "react-redux";
import IndexRoute from "../routes/index";
import reduxStore from "../store/index";

class AppContainer extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Provider store={reduxStore}>
        <IndexRoute />
      </Provider>
    );
  }
}

export default AppContainer;
