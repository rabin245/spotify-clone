import HomeSection from "../components/Section/HomeSection";

const Home = () => {
  const cards = Array(6).fill({
    imgSrc: "https://picsum.photos/200/200",
    title: "Peaceful Piano",
    subtitle: "Relax and indulge with beautiful piano pieces",
  });

  const playlistCards = Array(5).fill({
    imgSrc: "https://picsum.photos/200/200",
    title: "Chill Hits",
    subtitle: "Kick back to the best new and recent chill tunes.",
  });
  return (
    <div className="homePage px-4">
      <HomeSection title={"Focus"} cards={cards} />
      <HomeSection title={"Mood"} cards={cards} />
      <HomeSection title={"Spotify's Playlists"} cards={playlistCards} />
    </div>
  );
};

export default Home;
