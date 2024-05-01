import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import BackToTop from "./components/common/BackToTop";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import HomePage from "./components/homepage/HomePage";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
    });
  }, []);

  return (
    <>
      <div className="overflow-x-clip">
        <BackToTop />
        <Header />
        <HomePage />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
