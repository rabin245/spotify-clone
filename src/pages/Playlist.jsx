import { useRecoilValue } from "recoil";
import { playlistState } from "../recoilState";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Table } from "reactstrap";
import SpotifyIcon from "../assets/svg/spotify.svg";
import PlayButton from "../components/Button/PlayButton";
import { AiOutlineHeart } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import TableSongCard from "../components/Card/TableSongCard";

const Playlist = () => {
  const { id } = useParams();
  const playlist = useRecoilValue(playlistState(id));

  return (
    <div className="playlistpage">
      <div className="playlistpage--banner">
        <div className="">
          <div>
            <Row className="p-4">
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
                className="playlistpage--banner-info d-flex flex-column justify-content-between text-white"
              >
                <h6 className="fw-bold mt-5">Playlist</h6>
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
            </Row>

            <div className="playlistpage--banner-buttons d-flex align-items-center py-4 px-4">
              <div className="playlistpage--banner-button me-4">
                <PlayButton size={35} />
              </div>
              <div className="playlistpage--banner-button">
                <AiOutlineHeart size={35} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container fluid className="p-4 m-0">
        <Table responsive={true} borderless={true}>
          <thead>
            <tr
              className="border-secondary"
              style={{
                color: "#797B7C",
                borderBottom: "solid 1px #393C3E",
              }}
            >
              <th>
                <div
                  style={{
                    marginLeft: "0.8rem",
                  }}
                >
                  #
                </div>
              </th>
              <th>Title</th>
              <th>Album</th>
              <th>Date Added</th>
              <th
                style={{
                  textAlign: "right",
                }}
              >
                <div
                  style={{
                    marginRight: "2rem",
                  }}
                >
                  <BsStopwatch size={22} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {playlist.songs.map((songid, index) => (
              <TableSongCard key={songid} songid={songid} index={index + 1} />
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Playlist;
