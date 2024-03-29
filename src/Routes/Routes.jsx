import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Accounts/Login/Login";
import Registration from "../Pages/Accounts/Registration/Registration";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/AllToys/ToyDetails";
import PrivateRoute from "./../Providers/PrivateRoute";
import AddToy from "../Pages/AllToys/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToyDetails from "../Pages/MyToys/UpdateToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allToys",
        element: <AllToys />,
      },
      {
        path: "/allToys/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://happybive-server.vercel.app/toys/${params.id}`),
      },
      {
        path: "/addToy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateToyDetails/:id",
        element: <UpdateToyDetails />,
        loader: ({ params }) =>
          fetch(`https://happybive-server.vercel.app/toys/${params.id}`),
      },
      {
        path: "/subCategories/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://happybive-server.vercel.app/subCategories/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
