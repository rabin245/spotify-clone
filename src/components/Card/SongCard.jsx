import { AiOutlineEllipsis, AiOutlineHeart } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";

const SongCard = ({ image_url, name, artist, duration, playSong }) => {
  return (
    <>
      <div className="search--songs-card d-flex align-items-center p-1 rounded-2">
        <div className="d-flex align-items-center me-auto">
          <div className="search--songs-card-img-wrapper">
            <img src={image_url} style={{ width: "40px", height: "40px" }} />
            <div className="search--songs-card-img-overlay" onClick={playSong}>
              <BsPlayFill
                size={20}
                fill="white"
                className="search--songs-card-img-play"
              />
            </div>
          </div>
          <div className="ms-2 d-flex flex-column">
            <span className="p-0 m-0 fw-semibold">{name}</span>
            <span style={{ fontSize: "0.9rem" }}>{artist}</span>
          </div>
        </div>
        <div className="d-flex align-items-center me-3">
          <span className="me-5">
            <AiOutlineHeart
              size={20}
              className="search--songs-card-hidden-icon"
            />
          </span>
          <span className="me-2">{duration}</span>
          <span>
            <AiOutlineEllipsis
              size={20}
              fill="white"
              className="search--songs-card-hidden-icon"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default SongCard;
