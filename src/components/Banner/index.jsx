import { Col, Row } from "reactstrap";
import SpotifyIcon from "../../assets/svg/spotify.svg";
import PlayButton from "../Button/PlayButton";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const Banner = ({
  image_url,
  name,
  description,
  numberOfSongs,
  type = "playlist",
  play,
}) => {
  return (
    <div className="playlistpage--banner">
      <div>
        <Row className="p-4 m-0">
          <Col
            xs={12}
            md={12}
            lg={6}
            xl={"auto"}
            className="playlistpage--banner--image d-flex justify-content-center justify-content-md-center"
          >
            <img
              src={image_url}
              className="img-fluid rounded-3 shadow"
              alt="..."
            />
          </Col>
          <Col
            xs={12}
            md={12}
            lg={6}
            xl={"auto"}
            className="playlistpage--banner-info d-flex flex-column justify-content-between text-white"
          >
            <h6 className="fw-bold mt-5">
              {type === "playlist" ? "Playlist" : "Album"}
            </h6>
            <h1
              className="fw-bold"
              style={{
                fontSize: "6rem",
              }}
            >
              {name}
            </h1>
            <p
              className=""
              style={{
                color: "#B3B9BF",
              }}
            >
              {description}
            </p>
            <div className="d-flex align-items-center">
              <span className="d-flex align-items-center">
                <img
                  src={SpotifyIcon}
                  alt="..."
                  className="playlistpage--banner-spotifyicon me-2"
                />
                Spotify
              </span>
              <span className="mx-2">&bull;</span>
              <span>
                {numberOfSongs > 1 ? numberOfSongs + " songs" : "1 song"}
              </span>
              <span>, about 2 hr</span>
            </div>
          </Col>
        </Row>

        <div className="playlistpage--banner-buttons d-flex gap-4 align-items-center py-4 px-4">
          <div className="playlistpage--banner-button">
            <PlayButton size={35} play={play} />
          </div>
          <div className="playlistpage--banner-button">
            <AiOutlineHeart size={35} />
          </div>
          <div className="playlistpage--banner-button">
            <BsThreeDots size={35} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
