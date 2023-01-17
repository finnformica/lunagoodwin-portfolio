import { useState, useEffect } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { RxDotsVertical } from "react-icons/rx";

const DisplayImage = ({ name }) => {
  return (
    <img
      className="object-cover w-full h-full shadow-[0_0_60px_60px_rgba(0,0,0,0.8)_inset]"
      src={`/images/${name}`}
      alt="portfolio image"
    />
  );
};

const GridItem = ({ text, title, img, active, setActive }) => {
  const handleRightClick = () => {
    const nextIndex = active + 1 <= 4 - 1 ? active + 1 : 0;
    setActive(nextIndex);
  };

  const handleLeftClick = () => {
    const nextIndex = active - 1 >= 0 ? active - 1 : 4 - 1;
    setActive(nextIndex);
  };

  return (
    <article className="absolute left-0 top-0 grid grid-rows-[1fr_100px] grid-cols-[2fr_1fr] h-[54.45rem] portfolio-item">
      <div className="border-r border-black/10 dark:border-white/10 border-b h-full">
        <DisplayImage name={img} />
      </div>
      <div className="border-b border-black/10 dark:border-white/10 h-full relative text-right">
        <div className="absolute right-0 bottom-0 m-4">
          <p>{text}</p>
          <RxDotsVertical size={30} className="my-6 ml-auto" />
          <h1 className="text-3xl">{title}</h1>
        </div>
      </div>
      <div className="flex p-8 items-center border-r border-black/10 dark:border-white/10 h-full"></div>
      <div className="h-full flex justify-around items-center px-4">
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
      </div>
    </article>
  );
};

const Home = () => {
  const [active, setActive] = useState(0);

  const slides = [0, 1, 2, 3].map((item, id) => (
    <GridItem
      key={id}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      title={`Anime Vol. ${47 + item}`}
      img={`img${item + 1}.webp`}
      active={active}
      setActive={setActive}
    />
  ));

  const [slide, setSlide] = useState(slides[active]);

  useEffect(() => setSlide(slides[active]), [active]);

  return <div className="grow relative">{slide}</div>;
};

export default Home;
