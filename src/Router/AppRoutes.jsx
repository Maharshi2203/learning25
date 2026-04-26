import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { MapDemo } from "../Components/MapDemo";
import { ReduxApiDemo } from "../Components/Api/ReduxApiDemo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>, 

    children: [
      {
        path: "", 
        element:<MapDemo></MapDemo> ,
      },
      {
        path: "reduxapidemo",
        element: <ReduxApiDemo />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;