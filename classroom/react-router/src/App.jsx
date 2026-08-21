import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile";
import { Products } from "./pages/Products"; 
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: "/", element: <Home /> }, 
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "user/:userId", element: <UserProfile /> },
      { path: "products", element: <Products /> },
      { path: "productDetail/:productId", element: <ProductDetail /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}