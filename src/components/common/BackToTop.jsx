import React, { useEffect, useState } from 'react';
import { DoubleArrowUpIcon } from './Icons';
const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false)
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div>
        <div className={` transition-all duration-300 z-[200] back_to_top fixed right-5 bottom-5 sm:bottom-16 lg:bottom-20 sm:right-4 cursor-pointer`} onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }} >
          <div className={`group border outline-none flex items-center bg-primary border-white justify-center hover:bg-transparent group sm:w-12 sm:h-12 w-10 h-10 transition-all duration-300 rounded-full hover:shadow-[0px_0px_50px_-2px] hover:shadow-primary `}>
            <DoubleArrowUpIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </>
  );
}
export default BackToTop;
