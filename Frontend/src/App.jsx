import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Userlist from "./Userlist";
import Error from "./Error";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Route, Routes} from "react-router-dom";

const App=()=>{
  return(
    <>
       <Navbar/>
       <Routes>
        <Route exact path="/" element= {<Home/>}/>
        <Route exact path="/about" element= {<About/>}/>
        <Route exact path="/service" element= {<Service/>}/>
        <Route exact path="/contact" element= {<Contact/>}/>
        <Route exact path="/userlist" element= {<Userlist/>}/>
        <Route exact path="/*" element= {<Error/>}/>
       </Routes>
       <Footer/>
        
    </>
  )
}
export default App; 