import { useState, useEffect } from "react";
import Image from "next/image";
import { HiArrowNarrowLeft, HiOutlineDesktopComputer } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { RxDotsVertical } from "react-icons/rx";

import GridContainer from "../components/GridContainer/GridContainer";

import img1 from "../public/images/img1.webp";
import img2 from "../public/images/img2.webp";
import img3 from "../public/images/img3.webp";
import img4 from "../public/images/img4.webp";

const items = [
  {
    img: img1,
    title: "Anime Vol. 47",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: img2,
    title: "Anime Vol. 48",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: img3,
    title: "Anime Vol. 49",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: img4,
    title: "Anime Vol. 50",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const DisplayImage = ({ img }) => {
  return (
    <Image
      className="object-cover w-full h-full"
      src={img}
      alt="portfolio image"
    />
  );
};

const Home = () => {
  let activeIndex = 0;

  const handleRightClick = () => {
    const nextIndex = activeIndex + 1 <= 4 - 1 ? activeIndex + 1 : 0;

    const currentSlide = document.querySelector(
      `[data-index="${activeIndex}"]`
    );
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "after";

    nextSlide.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
      nextSlide.dataset.status = "active";

      activeIndex = nextIndex;
    });
  };

  const handleLeftClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : 4 - 1;
    const currentSlide = document.querySelector(
      `[data-index="${activeIndex}"]`
    );
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "before";

    nextSlide.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
      nextSlide.dataset.status = "active";

      activeIndex = nextIndex;
    });
  };

  return (
    <div className="relative h-[calc(100vh_-_101px)]">
      {items.map((item, id) => (
        <GridContainer
          data-index={id}
          data-status={id === 0 ? "active" : "inactive"}
          key={id}
          display={<DisplayImage img={item.img} />}
          content={
            <>
              <p>{item.text}</p>
              <RxDotsVertical
                size={30}
                className="my-6 md:ml-auto md:mr-0 mx-auto"
              />
              <h1 className="text-3xl">{item.title}</h1>
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
      ))}
    </div>
  );
};

export default Home;
