import Account from "../views/Account";
import AuthView from "../views/auth/AuthView";
import Calculator from "../views/Calculator";
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
