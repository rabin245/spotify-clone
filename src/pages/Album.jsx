import { useRecoilValue } from "recoil";
import { albumState } from "../recoilState";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import { SongsTable } from "../components/Table";

const Album = () => {
  const { id } = useParams();
  const album = useRecoilValue(albumState(id));

  return (
    <div className="playlistpage">
      <Banner
        image_url={album.image_url}
        name={album.name}
        description={album.artist}
        numberOfSongs={album.songs.length}
        type="album"
      />

      <SongsTable songsList={album.songs} type="album" />
    </div>
  );
};

export default Album;
