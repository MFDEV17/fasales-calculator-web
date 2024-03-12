import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GreetingsPage from "./pages/greetings.page.tsx";
import Root from "./pages/root.tsx";
import CartsPage from "./pages/carts.page.tsx";
import OrderPage from "./pages/order.page.tsx";
import ResultPage from "./pages/result.page.tsx";
import StatusBar from "./components/status-bar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { element: <GreetingsPage />, index: true },
      {
        element: <StatusBar />,
        children: [
          { element: <CartsPage />, path: "carts" },
          { element: <ResultPage />, path: "result" },
        ],
      },
      { element: <OrderPage />, path: "order" },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
