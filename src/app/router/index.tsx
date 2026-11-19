import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type React from "react";
import { HomePage } from "@/pages/home";
import { Layout } from "@/app/layout";
import { ProfilePage } from "@/pages/profile";
import { LoginPage } from "@/pages/login";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/profile',
        element: <ProfilePage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
    ]
  }
])

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />
}