import { createBrowserRouter } from "react-router-dom";
import OutLet from "./Conponents/OutLet/OutLet";
import Home from "./Conponents/Page/Home/Home";
import IteamsAdd from "./Conponents/Page/Admin/IteamsAdd/IteamsAdd";
import ShowProducts from "./Conponents/Page/Products/ShowProducts";
import AddtoCart from "./Conponents/Page/Products/AddtoCart";
import ProductDetails from "./Conponents/Page/Products/ProductDetails";
import Login from "./Conponents/Page/Login/Login";
import SignUp from "./Conponents/Page/SignUp/SignUp";
import CheekOut from "./Conponents/Page/Products/CheekOut";
import ProtectedRoute from "./Private/ProtectedRoute";
import About from "./Conponents/Page/About/About";
import Collections from "./Conponents/Page/Collections/Collections";
import Profile from "./Conponents/Page/Profile/Profile";
import UpdateAndDelete from "./Conponents/Page/Admin/UpdateAndDelete/UpdateAndDelete";
import Update from "./Conponents/Page/Admin/UpdateAndDelete/Update";
import Controll from "./AdminControll/Controll";
import Contact from "./Conponents/Page/Contact/Contact";
import NewProducts from "./Conponents/Page/Products/NewProducts";
import AdminOrders from "./Conponents/Page/Admin/AdminOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OutLet></OutLet>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // Admin Start
      {
        path: "/iteamsadd",
        element: <IteamsAdd></IteamsAdd>,
      },
      {
        path: "/updateanddelete",
        element: <UpdateAndDelete></UpdateAndDelete>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://bd-calling-first-project-backend.vercel.app/iteams/${params.id}`,
          ),
      },

      // Admin Ends
      {
        path: "/showProducts",
        element: <ShowProducts></ShowProducts>,
      },
      {
        path: "/newProducts",
        element: <NewProducts></NewProducts>,
      },
      {
        path: "/cheekout",
        element: (
          <ProtectedRoute>
            <CheekOut></CheekOut>
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <AddtoCart></AddtoCart>
          </ProtectedRoute>
        ),
      },
      {
        path: "/iteams/id/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(
            `https://bd-calling-first-project-backend.vercel.app/iteams/${params.id}`,
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/collections",
        element: <Collections></Collections>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/admincontroll",
        element: <Controll></Controll>,
      },
      {
        path: "/admin/orders",
        element: <AdminOrders />,
      },
    ],
  },
]);
export default router;
