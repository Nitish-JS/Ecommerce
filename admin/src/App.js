import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  // let admin=useSelector((state)=>state.user.currentUser);
  let admin;
  // console.log(useSelector((state) => state.user.currentUser));
  if (useSelector((state) => state?.user.currentUser) == null) admin = false;
  else admin = true;
  return (
    <Router>
      <Switch>
        {admin ? (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
            </div>
          </>
        ) : (
          <Route path="/">
            <Login />
          </Route>
        )}
      </Switch>
    </Router>
  );
}

export default App;
