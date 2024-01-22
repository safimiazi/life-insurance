import { createBrowserRouter } from "react-router-dom";
import Root from "../RootPage/Root";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
    },
  ]);

  export default router;