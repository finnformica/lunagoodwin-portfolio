import { useState, useEffect } from "react";

import Header from "../components/Header/Header";

const Layout = ({ children }) => {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");

  // fade in and out page transition
  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut");
  }, [children, setDisplayChildren, displayChildren]);

  return (
    <>
      <Header />
      <main
        style={{
          opacity: transitionStage === "fadeIn" ? 1 : 0,
          transition: "opacity 0.5s ease-in",
        }}
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
          }
        }}
      >
        {displayChildren}
      </main>
    </>
  );
};

export default Layout;
