import { useState, useEffect } from "react";
import { DoubleArrowUpIcon } from "./Icons";

const BackToTop = ({ className }) => {
  const [showButton, setShowButton] = useState(false);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
    const handleKeyDown = (event) => {
      if (event.key === "t") {
        scrollToTop();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className={`${
        showButton ? "translate-y-0 scale-100" : "translate-y-[50px] scale-0"
      } transition-all duration-300 z-[200] fixed right-5 bottom-5 sm:bottom-16 lg:bottom-20 sm:right-4 `}
    >
      <button
        className={`group border outline-none flex items-center bg-primary border-white justify-center hover:bg-transparent group sm:w-12 sm:h-12 w-10 h-10 transition-all duration-300 rounded-full hover:shadow-[0px_0px_50px_-2px] hover:shadow-primary  ${
          className && className
        } `}
        onClick={scrollToTop}
        aria-label="Back to Top"
      >
        <DoubleArrowUpIcon className="w-5 h-5 " />
      </button>
    </div>
  );
};

export default BackToTop;
