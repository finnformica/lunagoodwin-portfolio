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
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
          }
        }}
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          opacity: transitionStage === "fadeIn" ? 1 : 0,
          transition: "1s",
        }}
      >
        {displayChildren}
      </main>
    </>
  );
};

export default Layout;
