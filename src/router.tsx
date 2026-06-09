import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import Todo from "./pages/Todo/Todo";
import Caching from "./pages/Caching/Caching";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "caching",
        element: <Caching/>
      }
    ],
  },
]);
