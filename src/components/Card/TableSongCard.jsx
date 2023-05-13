import { useRecoilState, useRecoilValue } from "recoil";
import { currentSelectedSongAtom, songState } from "../../recoilState";
import { AiOutlineHeart } from "react-icons/ai";

const TableSongCard = ({ songid, index }) => {
  const song = useRecoilValue(songState(songid));
  const [currentSelectedSong, setCurrentSelectedSong] = useRecoilState(
    currentSelectedSongAtom
  );

  return (
    <tr
      key={songid}
      className={`playlistpage--table-row ${
        currentSelectedSong === songid && "playlistpage--table-row-active"
      }`}
      onClick={() => {
        setCurrentSelectedSong(songid);
      }}
    >
      <td>{index}</td>
      <td>
        <div className="d-flex align-items-center">
          <img
            src={song.image_url}
            alt="..."
            className="me-3 rounded-1"
            style={{
              width: "40px",
              height: "40px",
            }}
          />
          <div>
            <h6 className="m-0 fw-bold text-white">{song.name}</h6>
            <p className="m-0">{song.artist}</p>
          </div>
        </div>
      </td>
      <td>{song.album}</td>
      <td>random date</td>
      <td>
        <div
          style={{
            marginRight: "2rem",
          }}
          className="d-flex align-items-center justify-content-end"
        >
          <AiOutlineHeart
            size={20}
            className="playlistpage--table-row-follow me-5"
          />
          <span>{song.duration}</span>
        </div>
      </td>
    </tr>
  );
};

export default TableSongCard;
