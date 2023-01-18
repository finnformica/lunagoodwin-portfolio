import { useState, useEffect } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { RxDotsVertical } from "react-icons/rx";

import GridContainer from "../components/GridContainer/GridContainer";

import { items } from "../content/portfolio";

const DisplayImage = ({ name }) => {
  return (
    <img
      className="object-cover w-full h-full"
      src={`/images/${name}`}
      alt="portfolio image"
    />
  );
};

const TransitionWrapper = ({ children }) => {
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
    <div
      style={{
        opacity: transitionStage === "fadeIn" ? 1 : 0,
        transition: "opacity 1s ease-in",
      }}
      onTransitionEnd={() => {
        if (transitionStage === "fadeOut") {
          setDisplayChildren(children);
          setTransitionStage("fadeIn");
        }
      }}
      className="relative h-[calc(100vh_-_101px)]"
    >
      {displayChildren}
    </div>
  );
};

const Home = () => {
  const [active, setActive] = useState(0);

  const handleRightClick = () => {
    const nextIndex = active + 1 <= 4 - 1 ? active + 1 : 0;
    setActive(nextIndex);
  };

  const handleLeftClick = () => {
    const nextIndex = active - 1 >= 0 ? active - 1 : 4 - 1;
    setActive(nextIndex);
  };

  return (
    // <TransitionWrapper>
    <div className="relative h-[calc(100vh_-_101px)]">
      <GridContainer
        display={<DisplayImage name={items[active].img} />}
        content={
          <>
            <p>{items[active].text}</p>
            <RxDotsVertical
              size={30}
              className="my-6 md:ml-auto md:mr-0 mx-auto"
            />
            <h1 className="text-3xl">{items[active].title}</h1>
          </>
        }
        icons={
          <>
            <HiArrowNarrowLeft
              size={30}
              onClick={() => handleLeftClick()}
              className="cursor-pointer"
            />
            <HiArrowNarrowRight
              size={30}
              onClick={() => handleRightClick()}
              className="cursor-pointer"
            />
          </>
        }
      />
    </div>
    // </TransitionWrapper>
  );
};

export default Home;
