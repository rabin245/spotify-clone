import { useRecoilValue, useSetRecoilState } from "recoil";
import { albumState, currentPlayingSongAtom } from "../recoilState";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import { SongsTable } from "../components/Table";

const Album = () => {
  const { id } = useParams();
  const album = useRecoilValue(albumState(id));

  const setCurrentPlayingSong = useSetRecoilState(currentPlayingSongAtom);

  const playAlbum = () => {
    setCurrentPlayingSong(album.songs[0]);
  };

  return (
    <div className="playlistpage">
      <Banner
        image_url={album.image_url}
        name={album.name}
        description={album.artist}
        numberOfSongs={album.songs.length}
        type="album"
        play={playAlbum}
      />

      <SongsTable songsList={album.songs} type="album" />
    </div>
  );
};

export default Album;
