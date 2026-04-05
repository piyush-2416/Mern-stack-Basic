 
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import "./App.css";
//   import Home from "./Pages/Home.jsx";
// import About from "./Components/About.jsx";
// import Contact from "./Components/Contact.jsx";
// import Product from "./Pages/Product.jsx";
// import Element from "./Components/Element.jsx";
// import Element2 from "./Components/Element2.jsx";
// function App() {
 
//     return (
//         <>
//         <BrowserRouter>
//             <div className="Navbar">
//        <Link  className={"home"} to="/">Home</Link>| {""}
//                  <Link className={"about"} to="/about">About</Link>| {" "}
//                <Link className={"contact"} to="/contact">Contact</Link>
//              </div>
// <br/>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//                  <Route path="/Product" element={<Product />} /> 
//                 {/* <Route path="/product/:id" element={<Product />} />  */}
//              <Route path="/Element" element={<Element/>} />
//             <Route path="/Element2" element={<Element2/>} />
//             </Routes>
//         </BrowserRouter>
     
//         </>
//     );
// }

// export default App; 

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Product from './Pages/Product.jsx';
// import ProductCard from './Components/ProductCard.jsx';
import ProductPage from "./Pages/ProductPage.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="Navbar">
        <Link className={"home"} to="/">Home</Link>{""}
        <Link className={"about"} to="/about">About</Link>{" "}
        <Link className={"contact"} to="/contact">Contact</Link>
      </div>

      <br />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Product/:id" element={<ProductPage />} />
        <Route path="/ProductPage/:id" element={<ProductPage />} />

        {/* 👇 Yeh naya route hai - ID ke base par single product dikhayega */}
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;