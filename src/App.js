import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Auth from "./layout/Auth";
import Main from "./layout/Main";
import routes from "./routes";
import useLocalStorage from "use-local-storage";
import store from "./store";

import ReactGA from "react-ga";

import { googleAnalyticsActions } from "./utils/googleAnalytics";

function App(props) {
  // React.useEffect(() => {
  //   ReactGA.initialize("UA-222300293-1");
  //   ReactGA.pageview("/");
  // }, []);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {routes.map((route) => {
              switch (route.layout) {
                case "main":
                  return (
                    <Route exact path={route.path}>
                      <Main>
                        <route.component />
                      </Main>
                    </Route>
                  );
                case "auth":
                  return (
                    <Route exact path={route.path}>
                      <Auth>
                        <route.component />
                      </Auth>
                    </Route>
                  );
              }
            })}
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
