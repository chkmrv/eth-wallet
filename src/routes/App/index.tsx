import React from "react";
import Loadable from "react-loadable";
import Spinner from "components/Spinner";

export default Loadable({
  loader: () => import("./containers/AppViewContainer"),
  loading: () => <Spinner visible={true} size="28px" />,
});
