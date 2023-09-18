// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Blog from "./Blog";
// import Contact from "./pages/Contact";
// import Services from "./pages/Services";
// import Solutions from "./pages/Solutions";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />}>
//           <Route path="/about" elements ={<About/>} />
//           <Route path="Blog" element={<Blog />} />
//           <Route path="Contact" element={<Contact />} />
//           <Route path="Services" element={<Services />} />
//           <Route path="Solutions" element={<Services />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));