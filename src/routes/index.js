import Wallet from "../components/Wallet";
import Account from "../views/Account";
import AuthView from "../views/auth/AuthView";
import Calculator from "../views/Calculator";
import Dashboard from "../views/Dashboard";
import MainView from "../views/MainView";
import StakingView from "../views/StakingView";

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
    component: StakingView,
    layout: "main",
  },
  {
    path: "/dashboard",
    component: Dashboard,
    layout: "main",
  },
  {
    path: "/account",
    component: Account,
    layout: "main",
  },
  {
    path: "/calculator",
    component: Calculator,
    layout: "main",
  },
];
export default routes;
