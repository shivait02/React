import Blog from "./Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <routes>
        <route path="/" elements ={<Home/>} />
        <route path="/about" elements ={<About/>} />
        <route path="/contact" elements ={<Contact/>} />
        <route path="/services" elements ={<Services/>} />
        <route path="/Blog" elements ={<Blog/>} />
        <route path="/Solution" elements ={<Solutions/>} />
      </routes>  */}
        <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />}/>
           <Route path="/about" element ={<About/>} />
          <Route path="/blog" element={<Blog />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/services" element={<Services />} />
        
       </Routes>
     </BrowserRouter>
  
      {/* <Home />
      <About />
      <Services />
      <Solutions />
      <Blog />
      <Contact />
       */}
      {/* </> */}
    </div>
  );
}

export default App;
