import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dispaly from "./components/Dispaly.jsx";
import Name from "./components/mutiStepForm/Name.jsx";
import Email from "./components/mutiStepForm/Email.jsx";
import UserName from "./components/mutiStepForm/UserName.jsx";
import Password from "./components/mutiStepForm/Password.jsx";
import Success from "./components/mutiStepForm/Success.jsx";
import Crousal from "./components/Crousal.jsx";
import Cal from "./components/Cal.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cal />,
  },
  {
    path: "/email",
    element: <Email />,
  },
  {
    path: "/username",
    element: <UserName />,
  },
  {
    path: "/password",
    element: <Password />,
  },
  {
    path: "/success",
    element: <Success />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
