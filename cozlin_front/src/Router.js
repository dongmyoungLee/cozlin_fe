import { createBrowserRouter } from 'react-router-dom';
import App from "./App";
import Login from "./components/pages/Login/Login";
import Company from "./components/pages/Infomation/Company";
import HumanResources from "./components/pages/Layout/HumanResources";
import Announcement from "./components/pages/Layout/Announcement";

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'company',
        element: <Company />
      },
      {
        path: 'HumanResources',
        element: <HumanResources />
      },
      {
        path: 'Announcement',
        element: <Announcement />
      }

    ],
  }
]);

export default router;