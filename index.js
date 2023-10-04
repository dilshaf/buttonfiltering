import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./Style.css"
// import Home1 from "./Components1/Home1"
// import Details from './Details'
// import Review from "./Review"
// import About from "./About"
// import Error from './Error';
// import Layout from './Layout';
// import Account from './Account';
// import Application from './Application';
// import Password from './Password';
// import Security from './Security';
// import Notification from './Notification';
// import Fetch from './Fetch';
// import App from './App';
// import "./Components/Style.css
// import "./seach/style.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Product from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>

    {/* <ToastContainer /> */}
  </>
);

{
  /* // <BrowserRouter>
    // <Routes>//similar to a link
    // <Route path="/" element={<Layout/>}>

    //     <Route path="" element={<Account/>}></Route>
    
    //     <Route path="/application" element={<Application/>}></Route>
    //     <Route path="/notification" element={<Notification/>}></Route>
    //     <Route path="/password" element={<Password/>}></Route>
    //     <Route path="/security" element={<Security/>}></Route>
    
    //     </Route>
        
       
        
    // </Routes>
    // </BrowserRouter> */
}

{
  /* // <App/> */
}

{
  /* <Home/> */
}

{
  /* <Home1/> */
}