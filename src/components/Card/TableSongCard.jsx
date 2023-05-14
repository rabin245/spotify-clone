import { useRecoilState, useRecoilValue } from "recoil";
import { currentSelectedSongAtom, songState } from "../../recoilState";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
import { UncontrolledTooltip } from "reactstrap";

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
      <td>
        <div className="playlistpage--table-row-index-wrapper">
          <span className="playlistpage--table-row-index">{index}</span>
          <span className="playlistpage--table-row-playicon">
            <BsFillPlayFill size={20} />
          </span>
        </div>
      </td>
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
            <h6 className="m-0 fw-bold text-white">
              <Link
                to={`/album/${song.albumId}`}
                className="playlistpage--table-row-link"
              >
                {song.name}
              </Link>
            </h6>
            <p className="m-0">
              {song.artist}
              {song.featuredArtists.length > 0 && (
                <span>, {song.featuredArtists.join(", ")}</span>
              )}
            </p>
          </div>
        </div>
      </td>
      <td>
        <Link
          to={`/album/${song.albumId}`}
          className="playlistpage--table-row-link"
        >
          {song.album}
        </Link>
      </td>
      <td>4 days ago</td>
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
            id={`song-${songid}-like`}
          />
          <UncontrolledTooltip placement="top" target={`song-${songid}-like`}>
            Save to your library
          </UncontrolledTooltip>
          <span>{song.duration}</span>
        </div>
      </td>
    </tr>
  );
};

export default TableSongCard;
