import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Finance from "./components/Finance";
import JoinZkgun from "./components/JoinZkgun";
import CoreValue from "./components/CoreValue";
import OurEcosystem from "./components/OurEcosystem";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Finance />
      <OurEcosystem />
      <CoreValue />
      <JoinZkgun />
      <Footer />
    </>
  );
}

export default App;
