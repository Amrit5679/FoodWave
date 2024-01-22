import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header"
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import RestaurantCard from "./Components/RestaurantCard";
import RestaurantMenu from "./Components/RestaurantMenu";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Cart from "./Components/Cart";
import { Provider } from "react-redux";
import store from "./Utilities/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement : <Error />,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path: "/about",
        element: <About />,
        children:[{
          path: "profile",
          element: <Profile />,
        }]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element : <RestaurantMenu />
      },
      {
        path:"/cart",
        element: <Cart />,
      },
    ]
  },
  {
    path:"/login",
    element: <Login />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);