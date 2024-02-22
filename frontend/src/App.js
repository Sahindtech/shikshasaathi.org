import router from "./routes/route";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
