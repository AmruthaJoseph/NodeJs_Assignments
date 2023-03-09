import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Registration from "./components/Registration";
import ResetPassword from "./components/ResetPassword";
import ProductList from "./components/lists/ProductList";
import PostAndComments from "./components/lists/PostAndComments";
import UserList from "./components/lists/UserList";

const myRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/register", element: <Registration /> },
  { path: "/reset", element: <ResetPassword /> },
  { path: "/product", element: <ProductList /> },
  { path: "/post", element: <PostAndComments /> },
  { path: "/user", element: <UserList /> }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={myRouter} />
    </div>
  );
}

export default App;
