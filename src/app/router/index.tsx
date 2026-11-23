import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type React from "react";
import { HomePage } from "@/pages/home";
import { Layout } from "@/app/layout";
import { ProfilePage } from "@/pages/profile";
import { LoginPage } from "@/pages/login";
import { RegisterPage } from "@/pages/register";


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
      {
        path: '/register',
        element: <RegisterPage />
      },
    ]
  }
])

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />
}