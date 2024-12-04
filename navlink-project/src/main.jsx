import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Contact from "./assets/components/Contact.jsx";
import Home from "./assets/components/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./assets/components/About.jsx";
import Modal from "./assets/components/Modal.jsx";
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
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
