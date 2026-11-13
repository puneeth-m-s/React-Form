import { ContactPage } from './ContackPage';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { ThankYou } from './ThankYou';

const myRouterTree = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/contact" />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
    //action: ContactPageAction,
  },
  {
    path: '/thankyou/:name',
    element: <ThankYou />,
  },
]);

export function App() {
  return <RouterProvider router={myRouterTree} />;
}
