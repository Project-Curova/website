import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router-dom";
import WebLayout from "./layouts/WebLayout";
import { NAVIGATION } from "./lib/definitions";
import { HomePage } from "./pages";
import ErrorPage from "./pages/error/ErrorPage";

 const routes: RouteObject[] = [
    {
      path: "/",
      // element: <RequireAuth />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <WebLayout />,
          children: [
            {
              index: true,
              element: <HomePage />
            },
            {
              path: `${NAVIGATION.APPOINTMENTS}`,
              // element: <AppointmentPage />
            },
          ]
        },
        
        // // Public routes
        // {
        //   path: NAVIGATION.LOGIN,
        //   element: <LoginPage />
        // },
        // {
        //   path: NAVIGATION.SIGNUP,
        //   element: <SignUpPage />
        // },
      ]
    },
  ];

const router = createBrowserRouter(routes)

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App