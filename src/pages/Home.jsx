import { HomeSection } from "../components/Section";
import { useRecoilValue } from "recoil";
import { defaultAlbumsAtom, defaultPlaylistsAtom } from "../recoilState";

const Home = () => {
  const defaultPlaylists = useRecoilValue(defaultPlaylistsAtom);
  const defaultAlbums = useRecoilValue(defaultAlbumsAtom);

  return (
    <div className="homePage px-4">
      <HomeSection
        title={"Focus"}
        listInfo={defaultPlaylists}
        type="playlist"
      />
      <HomeSection title={"Mood"} listInfo={defaultAlbums} type="album" />
      <HomeSection
        title={"Spotify's Playlists"}
        listInfo={defaultPlaylists}
        type="playlist"
      />
    </div>
  );
};

export default Home;
