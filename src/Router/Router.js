import { createBrowserRouter } from "react-router-dom";
import ContactUs from "../components/ContactUs/ContactUs";
import DetailsProducts from "../components/DetailsProduct/DetailsProducts";
import Home from "../components/Home/Home";
import Orders from "../components/Orders/Orders";
import ShopAllProducts from "../components/ShopAllProducts/ShopAllProducts";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shopallproducts",
        element: <ShopAllProducts></ShopAllProducts>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/especificproduct/:id",
        element: <DetailsProducts></DetailsProducts>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/especificproduct/${params.id}`),
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
    ],
  },
]);

export default router;
