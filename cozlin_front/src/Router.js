import { createBrowserRouter } from 'react-router-dom';
import App from "./App";
import Item from "./components/Item";
import Login from "./components/Login/Login";

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
    ],
  }
]);

export default router;