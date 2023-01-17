import { useState } from "react";
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
    <div className="grow relative">
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
  );
};

export default Home;
