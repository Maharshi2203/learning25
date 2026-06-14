import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { MapDemo } from "../Components/MapDemo";
import { ReduxApiDemo } from "../Components/Api/ReduxApiDemo";
import { ApiDemo1 } from "../Components/Api/ApiDemo1";
import { OmdbApiDemo } from "../Components/Api/OMDbApi";
import { ApiDemo2 } from "../Components/Api/ApiDemo2";
import { ApiDemo3 } from "../Components/Api/ApiDemo3";
import { ApiDemo4 } from "../Components/Api/ApiDemo4";
import { UpdateUser } from "../Components/Api/UpdateUser";
import Memory from "../Components/Api/Memory";
import { Books } from "../Components/Books";
import ProductComponent from "../Components/ProductComponent";
import { StudyBook } from "../Components/StudyBook";

import { Login } from "../Components/Login";
import { ErrorComponent } from "../Components/ErrorComponent";
import { TailwindDemo1 } from "../Components/TailwindDemo1";
import { TailwindDemo2 } from "../Components/TailwindDemo2";
import { TaiwindDashboard } from "../Components/TaiwindDashboard";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>, 
    errorElement: <ErrorComponent />,

    children: [
      {
        path: "", 
        element:<MapDemo></MapDemo> ,
      },
      {
        path: "reduxapidemo",
        element: <ReduxApiDemo />,
      },
      {
        path: "apidemo1",
        element: <ApiDemo1 />,
      },
      {
        path: "omdbapi",
        element: <OmdbApiDemo />,
      },
      {
        path: "apidemo2",
        element: <ApiDemo2 />,
      },
      {
        path: "apidemo3",
        element: <ApiDemo3 />,
      },
      {
        path: "apidemo4",
        element: <ApiDemo4 />,
      },
      {
        path: "updateuser/:id",
        element: <UpdateUser />,
      },
      {
        path: "memory",
        element: <Memory />,
      },

      {
        path: "books",
        element: <Books />,
      },
      {
        path: "productcomponent",
        element: <ProductComponent />,
      },
      {
        path: "user/taiwinddemo1",
        element: <TailwindDemo1 />,
      },

      {
        path: "study/:id",
        element: <StudyBook />,
      },
      {
        path:"user/tailwinddemo2",
        element:<TailwindDemo2></TailwindDemo2>
      },
      {
        path:"user/taiwinddemo2",
        element:<TailwindDemo2></TailwindDemo2>
      },
      {
        path:"taiwinddashboard",
        element:<TaiwindDashboard/>
      },
      {
        path:"/user/tailwinddasboard",
        element:<TaiwindDashboard/>
      },

    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);


const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
