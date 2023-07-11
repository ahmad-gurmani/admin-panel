import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import SignInForm from './components/sign-in-form/sign-in-form.component';
import SignUpForm from "./components/sign-up-form/sign-up-form.component";
import Dashboard from "./components/dashboard-component/dashboard.component";
import Categories from "./components/categories-component/categories.component";
import Ingredient from "./components/ingredient-component/ingredient.component";
import Recipes from "./components/Recipes-component/Recipes.component";
import Users from "./components/users-component/users.component";


const App = () => {





  return (
    <Fragment>
      <div className="flex h-full">
        <Routes>
          <Route index path="/" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
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

export default App;