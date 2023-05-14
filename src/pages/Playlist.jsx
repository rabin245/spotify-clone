import { useRecoilValue } from "recoil";
import { playlistState } from "../recoilState";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import { SongsTable } from "../components/Table";

const Playlist = () => {
  const { id } = useParams();
  const playlist = useRecoilValue(playlistState(id));

  return (
    <div className="playlistpage">
      <Banner
        image_url={playlist.image_url}
        name={playlist.name}
        description={playlist.description}
        numberOfSongs={playlist.songs.length}
        type="playlist"
      />

      <SongsTable songsList={playlist.songs} type="playlist" />
    </div>
  );
};

export default Playlist;
