import HomeSection from "../components/Section/HomeSection";
import { useRecoilValue } from "recoil";
import { defaultPlaylistsAtom } from "../recoilState";

const Home = () => {
  const defaultPlaylists = useRecoilValue(defaultPlaylistsAtom);
  // console.log(defaultPlaylists);

  return (
    <div className="homePage px-4">
      <HomeSection title={"Focus"} playlistInfo={defaultPlaylists} />
      <HomeSection title={"Mood"} playlistInfo={defaultPlaylists} />
      <HomeSection
        title={"Spotify's Playlists"}
        playlistInfo={defaultPlaylists}
      />
    </div>
  );
};

export default Home;
