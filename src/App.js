import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Finance from "./components/Finance";
import JoinZkgun from "./components/JoinZkgun";
import CoreValue from "./components/CoreValue";
import OurEcosystem from "./components/OurEcosystem";
import BackToTop from "./components/common/BackToTop";
import Discover from "./components/Discover";
import OurCapabilities from "./components/OurCapabilities";
import Decentralized from "./components/Decentralized";

function App() {
  return (
    <>
      <BackToTop />
      <Header />
      <Hero />
      <Finance />
      <OurEcosystem />
      <Discover />
      <CoreValue />
      <OurCapabilities />
      <Decentralized />
      <JoinZkgun />
      <Footer />
    </>
  );
}

export default App;
