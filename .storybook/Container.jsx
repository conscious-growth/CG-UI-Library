import * as React from "react";
import "../css/theme.less";

function Container({ story }) {
  return <React.StrictMode>{story()}</React.StrictMode>;
}

export default Container;
