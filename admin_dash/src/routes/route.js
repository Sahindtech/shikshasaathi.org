import { createBrowserRouter } from "react-router-dom";
import Main from "../../src/main/Main";
import Student from "../components/pages/Student";
import StudentUpdate from "../components/pages/StudentUpdate";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/students",
    element: <Student />,
  },
  {
    path: "/student-update/:id",
    element: <StudentUpdate />,
  },
]);

export default router;
