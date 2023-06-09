import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Meals from "./Components/Meals";
import About from "./Components/About";
import Contact from "./Components/Contact";
import MealDetail from "./Components/MealDetail";
import NotFound from "./Components/NotFound";
import SignIn from "./Components/SignIn";
import Register from "./Components/Register";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./Components/Routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "meals",
        element: <Meals></Meals>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish"),
      },
      {
        path: "meal/:mealId",
        element: <MealDetail></MealDetail>,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`
          ),
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
      {
        path: "signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
