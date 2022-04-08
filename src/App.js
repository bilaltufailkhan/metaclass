import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Auth from "./layout/Auth";
import Main from "./layout/Main";
import routes from "./routes";
import store from "./store";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";

const getLibrary = (provider) => {
  return new Web3(provider);
};

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      <Web3ReactProvider getLibrary={getLibrary}>
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
        {/* </Provider> */}
      </Web3ReactProvider>
    </>
  );
}

export default App;
