import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { SectionCard } from "../components/Card";
import { useRecoilValue } from "recoil";
import { defaultPlaylistsAtom, searchResultsState } from "../recoilState";
import { AiOutlineEllipsis, AiOutlineHeart } from "react-icons/ai";
import { TopResultsSection } from "../components/Section";

const Search = () => {
  const { query } = useParams();

  const defaultPlaylists = useRecoilValue(defaultPlaylistsAtom);

  const { artists, albums, playlists, songs } = useRecoilValue(
    searchResultsState(query)
  );

  if (
    query &&
    !artists.length &&
    !albums.length &&
    !playlists.length &&
    !songs.length
  ) {
    return (
      <Container fluid className="p-0 m-0 my-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="fw-bold fs-3">
            No results found for &ldquo;{query}&ldquo;
          </h2>
          <p>
            Please make sure your words are spelled correctly, or use fewer or
            different keywords.
          </p>
        </div>
      </Container>
    );
  }

  if (!query)
    return (
      <Container fluid className="p-0 my-4 px-4">
        <div className="d-flex justify-content-between align-items-end">
          <h2 className="fw-bold fs-3">Spotify&apos;s Playlists</h2>
        </div>
        <div className="d-flex mt-3 gap-2 px-1 flex-wrap">
          {defaultPlaylists.map((playlist) => (
            <SectionCard key={playlist.id} id={playlist.id} />
          ))}
        </div>
      </Container>
    );

  return (
    <div className="px-4">
      {artists.length && songs.length && (
        <Container fluid className="p-0 my-4">
          <Row className="p-0 m-0">
            <TopResultsSection artists={artists} />

            <Col
              xs={12}
              md={12}
              lg={7}
              className="p-0 m-0 ps-lg-4 mt-4 mt-lg-0"
            >
              <div>
                <h2 className="mb-2 fw-bold">Songs</h2>

                {[...songs]
                  .splice(0, 4)
                  .map(({ image_url, name, artist, duration }) => {
                    return (
                      <>
                        <div className="search--songs-card d-flex align-items-center p-1 border-3">
                          <div className="d-flex align-items-center me-auto">
                            <img
                              src={image_url}
                              style={{ width: "40px", height: "40px" }}
                            />
                            <div className="ms-2 d-flex flex-column">
                              <span className="p-0 m-0 fw-semibold">
                                {name}
                              </span>
                              <span style={{ fontSize: "0.9rem" }}>
                                {artist}
                              </span>
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
                  })}
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Search;
