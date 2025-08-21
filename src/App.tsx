import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router-dom";
import WebLayout from "./layouts/WebLayout";
import { NAVIGATION } from "./lib/definitions";
import { ContactUsPage, HomePage, PrivacyPolicyPage, TermsAndConditionPage } from "./pages";
import AboutUs from "./pages/AboutUs";
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
              path: `${NAVIGATION.ABOUT_US}`,
              element: <AboutUs />
            },
            {
              path: `${NAVIGATION.PRIVACY}`,
              element: <PrivacyPolicyPage />
            },
            {
              path: `${NAVIGATION.TERMS}`,
              element: <TermsAndConditionPage />
            },
            {
              path: `${NAVIGATION.CONTACT_US}`,
              element: <ContactUsPage />
            },
          ]
        },
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