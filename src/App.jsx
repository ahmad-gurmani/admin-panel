import { Fragment, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import NavbarItems from "./routes/navbar-items/navbar.component";
import Home from './routes/home/home.component';
import SignInForm from './components/sign-in-form/sign-in-form.component';
import SignUpForm from "./components/sign-up-form/sign-up-form.component";
import Dashboard from "./components/dashboard-component/dashboard.component";
import Categories from "./components/categories-component/categories.component";
import Ingredient from "./components/ingredient-component/ingredient.component";
import Recipes from "./components/Recipes-component/Recipes.component";
import Users from "./components/users-component/users.component";


const App = () => {
  const [isSignIn, setSignIn] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") setSignIn(false)
    if (location.pathname === "/home") setSignIn(true)
  }, [location.pathname])

  return (
    <Fragment>
      <div className="flex">
        {isSignIn && <NavbarItems />}
        <Routes>
          <Route index path="/" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/ingredient" element={<Ingredient />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Fragment>


  );
};

export default App