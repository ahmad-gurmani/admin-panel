// import { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './routes/home-component/home.component';
import SignInForm from './components/sign-in-form/sign-in-form.component';
import SignUpForm from "./components/sign-up-form/sign-up-form.component";

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App
