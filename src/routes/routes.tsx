import { RouteObject } from "react-router-dom";
import AddGift from "./gift/AddGift";
import EditGift from "./gift/EditGift";
import Home from "./Home";
import Layout from "./Layout";
import AddPerson from "./person/AddPerson";
import EditPerson from "./person/EditPerson";
import ChildLayout from "./ChildLayout";

export const routes = [
  {
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
  },
] as RouteObject[];