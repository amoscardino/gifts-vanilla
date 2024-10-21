import { RouteObject } from "react-router-dom";
import Home from "./Home";
import Layout from "./shared/Layout";
import ChildLayout from "./shared/ChildLayout";
import AddGift from "./gift/AddGift";
import EditGift from "./gift/EditGift";
import AddPerson from "./person/AddPerson";
import EditPerson from "./person/EditPerson";

export const routes = [{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "",
      element: <Home />
    },
    {
      path: "person",
      element: <ChildLayout />,
      children: [
        {
          path: "",
          element: <AddPerson />
        },
        {
          path: ":id",
          element: <EditPerson />
        },
      ]
    },
    {
      path: "gift",
      element: <ChildLayout />,
      children: [
        {
          path: "",
          element: <AddGift />
        },
        {
          path: ":id",
          element: <EditGift />
        }
      ]
    },
  ]
}] as RouteObject[];