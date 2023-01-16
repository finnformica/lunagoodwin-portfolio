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

const GridItem = ({ text, title, img, dataIndex, dataStatus }) => {
  return (
    <article
      data-index={dataIndex}
      data-status={dataStatus}
      className="data-[status=inactive]:scale-0 absolute left-0 top-0 grid grid-rows-[1fr_100px] grid-cols-[2fr_1fr] h-[54.45rem] portfolio-item"
    >
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
        <HiArrowNarrowLeft size={30} />
        <HiArrowNarrowRight size={30} />
      </div>
    </article>
  );
};

const Home = () => {
  let activeIndex = 0;
  const groups = document.getElementsByClassName("portfolio-item");

  const handleLeftClick = () => {
    const nextIndex =
      activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
    const currentGroup = document.querySelector(`[data-index]`);
  };
  return (
    <div className="grow relative">
      {/* <GridItem
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        title="Anime Vol. 47"
        img="img1.webp"
        dataIndex="0"
        dataStatus="active"
      />
      <GridItem
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        title="Anime Vol. 48"
        img="img2.webp"
        dataIndex="1"
        dataStatus="inactive"
      />
      <GridItem
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        title="Anime Vol. 49"
        img="img3.webp"
        dataIndex="2"
        dataStatus="inactive"
      />
      <GridItem
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        title="Anime Vol. 50"
        img="img4.webp"
        dataIndex="3"
        dataStatus="inactive"
      /> */}
      {[0, 1, 2, 3].map((item, id) => (
        <GridItem
          key={id}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          title={`Anime Vol. ${47 + item}`}
          img={`img${item + 1}.webp`}
          dataIndex={item.toString()}
          dataStatus={item === 0 ? "active" : "inactive"}
        />
      ))}
    </div>
  );
};

export default Home;
