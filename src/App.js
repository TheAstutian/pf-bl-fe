import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import './App.scss';
import Home from './pages/Home';
import Write from "./pages/Write";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";


export const API_URL = 'http://localhost:8000';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
  },
  {
    path:"/write",
    element:<Write />
  },
  {
    path:"/Login",
    element: <Login/>
  },
  {
    path:"/Register",
    element:<Register/>
  },
  {
    path:"/posts/:id",
    element:<Single/>
  },  
])

function App() {
  return (

    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  ); 
}

export default App;
 