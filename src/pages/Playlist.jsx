import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentPlayingSongAtom, playlistState } from "../recoilState";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import { SongsTable } from "../components/Table";

const Playlist = () => {
  const { id } = useParams();
  const playlist = useRecoilValue(playlistState(id));

  const setCurrentPlayingSong = useSetRecoilState(currentPlayingSongAtom);

  const playAlbum = () => {
    setCurrentPlayingSong(playlist.songs[0]);
  };

  return (
    <div className="playlistpage">
      <Banner
        image_url={playlist.image_url}
        name={playlist.name}
        description={playlist.description}
        numberOfSongs={playlist.songs.length}
        type="playlist"
        play={playAlbum}
      />

      <SongsTable songsList={playlist.songs} type="playlist" />
    </div>
  );
};

export default Playlist;
