import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../components/About-Us/about";
import Course from "../components/Courses/courses";
import Contact from "../components/Contact/Contact";
import Gallery from "../components/Gallery/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/aboutus",
    element:<About />,
  },
  {
    path:"/courses",
    element:<Course />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
