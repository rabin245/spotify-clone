import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentPlayingSongAtom, songState } from "../../recoilState";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFillPlayFill, BsThreeDots } from "react-icons/bs";
import { UncontrolledTooltip } from "reactstrap";

const TableSongCard = ({
  songid,
  index,
  type,
  currentSelectedSong,
  setCurrentSelectedSong,
}) => {
  const song = useRecoilValue(songState(songid));

  const setCurrentPlayingSong = useSetRecoilState(currentPlayingSongAtom);

  const playSong = () => {
    setCurrentPlayingSong(songid);
  };

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
          <span className="playlistpage--table-row-playicon" onClick={playSong}>
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
      {type === "playlist" && (
        <>
          <td>
            <Link
              to={`/album/${song.albumId}`}
              className="playlistpage--table-row-link"
            >
              {song.album}
            </Link>
          </td>
          <td>4 days ago</td>
        </>
      )}
      <td>
        <div
          style={{
            marginRight: "2rem",
            gap: "1rem",
          }}
          className="d-flex align-items-center justify-content-end"
        >
          <AiOutlineHeart
            size={20}
            className="playlistpage--table-row-follow"
            id={`song-${songid}-like`}
          />
          <UncontrolledTooltip placement="top" target={`song-${songid}-like`}>
            Save to your library
          </UncontrolledTooltip>
          <span
            style={{
              fontSize: "0.8rem",
              paddingTop: "4px",
            }}
          >
            {song.duration}
          </span>
          <span>
            <BsThreeDots size={20} />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default TableSongCard;
