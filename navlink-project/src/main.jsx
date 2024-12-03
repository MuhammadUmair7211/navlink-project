import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Contact from "./assets/components/Contact.jsx";
import Home from "./assets/components/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./assets/components/About.jsx";
import Signin from "./assets/components/Signin.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Signin",
        element: <Signin />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
