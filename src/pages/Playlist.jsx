import { useRecoilValue } from "recoil";
import { playlistState } from "../recoilState";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import SpotifyIcon from "../assets/svg/spotify.svg";

const Playlist = () => {
  const { id } = useParams();
  const playlist = useRecoilValue(playlistState(id));

  return (
    <div className="playlistpage">
      <div className="playlistpage--banner ">
        <Container className="px-4 py-2">
          <Row>
            <Col
              xs={12}
              md={3}
              lg={3}
              className="playlistpage--banner--image d-flex justify-content-center"
            >
              <img
                src={playlist.image_url}
                className="img-fluid rounded-3 shadow"
                alt="..."
              />
            </Col>
            <Col
              xs={12}
              md={9}
              lg={9}
              className="playlistpage--banner-info d-flex flex-column justify-content-around text-white"
            >
              <h6 className="fw-bold">Playlist</h6>
              <h1
                className="fw-bold"
                style={{
                  fontSize: "6rem",
                }}
              >
                {playlist.name}
              </h1>
              <p
                className=""
                style={{
                  color: "#B3B9BF",
                }}
              >
                {playlist.description}
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
                <span>{playlist.songs.length} songs</span>
                <span>, about 2 hr</span>
              </div>
            </Col>

            <div>
              <div className="playlistpage--banner-button">
                <button className="btn btn-success">Play</button>
              </div>
              <div className="playlistpage--banner-button">
                <button className="btn btn-success">Follow</button>
              </div>
            </div>
          </Row>
        </Container>
      </div>

      <Container></Container>
    </div>
  );
};

export default Playlist;
