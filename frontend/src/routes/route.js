import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../components/Contact/Contact";
import Gallery from "../components/Gallery/Gallery";
import Courses from "../components/Courses/Courses";
import About from "../components/About/About";
import Student from "../components/Student Corner/Student";
import Certificate from "../components/Certificate/Certificate";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/course",
    element: <Courses />,
  },
  {
    path: "/student",
    element: <Student />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/certificate",
    element: <Certificate />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
