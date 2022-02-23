import Wallet from "../components/Wallet";
import AuthView from "../views/auth/AuthView";
import MainView from "../views/MainView";

let routes = [
  {
    path: "/auth",
    component: AuthView,
    layout: "auth",
  },
  {
    path: "/",
    component: MainView,
    layout: "main",
  },
  {
    path: "/staking",
    component: Wallet,
    layout: "main",
  },
];
export default routes;
