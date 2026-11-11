import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type React from "react";
import { HomePage } from "@/pages/home";
import { Layout } from "@/app/layout";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
    ]
  }
])

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />
}