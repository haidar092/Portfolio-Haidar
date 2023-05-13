import "./App.css";
import About from "./Components/About";
import Education from "./Components/Education";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import MouseParticles from "react-mouse-particles";
import ReactWhatsappButton from "react-whatsapp-button";
function App() {
  return (
    <>
     <ReactWhatsappButton
        countryCode="92"
        phoneNumber="3000992532"
      />
      <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
      <Header />
      <Home />
      <About />
      <Education />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
