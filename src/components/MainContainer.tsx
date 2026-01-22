import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      
      {/* ডেস্কটপ ভিউতে 3D মডেল দেখানো */}
      {isDesktopView && children}

      {/* Smooth Wrapper বাদ দেওয়া হয়েছে সাধারণ স্ক্রলিং এর জন্য */}
      <div className="content-container">
          <Landing>{!isDesktopView && children}</Landing>
          <About />
          <WhatIDo />
          <Career />
          <Work />
          {isDesktopView && (
            <Suspense fallback={<div>Loading....</div>}>
              <TechStack />
            </Suspense>
          )}
          <Contact />
      </div>
    </div>
  );
};

export default MainContainer;
