import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Navbare from "./component/layout/Navbare";
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import PageNotFound from "./component/pages/PageNotFound";
import Adduser from "./component/users/Adduser";
import EditUser from "./component/users/EditUser";
import User from "./component/users/User";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbare></Navbare>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/about" Component={About}></Route>
          <Route exact path="/contact" Component={Contact}></Route>
          <Route exact path="/user/add" Component={Adduser}></Route>
          <Route exact path="/user/edit/:id" Component={EditUser}></Route>
          <Route exact path="/user/:id" Component={User}></Route>
          <Route exact path="*" Component={PageNotFound}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
