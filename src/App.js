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
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
    });
  }, []);
  const [openPopUp, setOpenPopUp] = useState(false);

  return (
    <>
      <div className="overflow-hidden">
        <BackToTop />
        <Header setOpenPopUp={setOpenPopUp} openPopUp={openPopUp} />
        <Hero setOpenPopUp={setOpenPopUp} openPopUp={openPopUp} />
        <Finance setOpenPopUp={setOpenPopUp} openPopUp={openPopUp} />
        <OurEcosystem setOpenPopUp={setOpenPopUp} openPopUp={openPopUp} />
        <CoreValue setOpenPopUp={setOpenPopUp} openPopUp={openPopUp} />
        <OurCapabilities setOpenPopUp={setOpenPopUp} openPopUp={openPopUp} />
        <Discover setOpenPopUp={setOpenPopUp} openPopUp={openPopUp} />
        <Decentralized />
        <JoinZkgun />
        <Footer />
      </div>
    </>
  );
}

export default App;
