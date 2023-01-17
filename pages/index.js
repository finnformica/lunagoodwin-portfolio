import { useState, useEffect } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { RxDotsVertical } from "react-icons/rx";

import { items } from "../content/portfolio";

const DisplayImage = ({ name }) => {
  return (
    <img
      className="object-cover w-full h-full shadow-[0_0_60px_60px_rgba(0,0,0,0.8)_inset]"
      src={`/images/${name}`}
      alt="portfolio image"
    />
  );
};

const GridItem = ({ text, title, img, handleLeft, handleRight }) => {
  return (
    <article className="absolute left-0 top-0 grid md:grid-rows-[1fr_100px] grid-cols-[1fr] md:grid-cols-[2fr_1fr] grid-rows-[1fr_200px_0_100px] h-[54.45rem] portfolio-item">
      <div className="border-r border-black/10 dark:border-white/10 border-b h-full">
        <DisplayImage name={img} />
      </div>
      <div className="border-b border-black/10 dark:border-white/10 h-full md:relative flex items-center">
        <div
          className="md:absolute md:right-0 md:bottom-0 md:m-4 md:text-right md:initial
        text-center w-full"
        >
          <p>{text}</p>
          <RxDotsVertical
            size={30}
            className="my-6 md:ml-auto md:mr-0 mx-auto"
          />
          <h1 className="text-3xl">{title}</h1>
        </div>
      </div>
      <div className="flex items-center border-r border-black/10 dark:border-white/10 h-full"></div>
      <div className="h-full flex justify-around items-center px-4 py-8">
        <HiArrowNarrowLeft
          size={30}
          onClick={() => handleLeft()}
          className="cursor-pointer"
        />
        <HiArrowNarrowRight
          size={30}
          onClick={() => handleRight()}
          className="cursor-pointer"
        />
      </div>
    </article>
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
      <GridItem
        text={items[active].text}
        title={items[active].title}
        img={items[active].img}
        active={active}
        setActive={setActive}
        handleLeft={handleLeftClick}
        handleRight={handleRightClick}
      />
    </div>
  );
};

export default Home;
