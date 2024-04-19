import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Document from "./components/Document";
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
      <BackToTop />
      <Header />
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/documentation" Component={Document} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
