import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "./Routes";
import { ConnectedRouter } from "connected-react-router";

export default function App({ history, context }) {
  return (
    <div>
      <ConnectedRouter history={history} context={context}>
        {<Routes />}
      </ConnectedRouter>
    </div>
  );
}
