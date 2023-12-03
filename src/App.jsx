import Navbar from "./components/navbar";
import NetworkingComponent from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Testimonial from "./components/testimonial";
import CustomizedSolutions from "./components/customze";
import Products from "./components/products";
import Contact from "./components/contacts";
function App() {
  return (
    <>
      <Navbar />
      <NetworkingComponent />
      <About />
      <Services />
      <Testimonial />
      <Products />
      <CustomizedSolutions />
      <Contact />
    </>
  );
}

export default App;
