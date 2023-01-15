const DisplayImage = ({ name }) => {
  return (
    <img
      className="object-cover w-full h-full shadow-[0_0_60px_60px_rgba(0,0,0,0.8)_inset]"
      src={`/images/${name}`}
      alt="portfolio image"
    />
  );
};

const Home = () => {
  return (
    <div className="object-cover h-[54.3rem] w-1/2 md:w-2/3 border-r border-white/10 pt-4 pr-4">
      <DisplayImage name="img2.webp" />
    </div>
  );
};

export default Home;
