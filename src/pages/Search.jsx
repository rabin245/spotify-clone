import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { SectionCard, SongCard } from "../components/Card";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentPlayingSongAtom,
  defaultPlaylistsAtom,
  searchResultsState,
} from "../recoilState";
import { HomeSection, TopResultsSection } from "../components/Section";
import { startTransition } from "react";

const Search = () => {
  const { query } = useParams();

  const defaultPlaylists = useRecoilValue(defaultPlaylistsAtom);

  const { artists, albums, playlists, songs } = useRecoilValue(
    searchResultsState(query)
  );

  const setCurrentPlayingSong = useSetRecoilState(currentPlayingSongAtom);

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
            <SectionCard
              key={playlist.id}
              id={playlist.id}
              playSong={() => {
                startTransition(() => setCurrentPlayingSong(playlist.songs[0]));
              }}
            />
          ))}
        </div>
      </Container>
    );

  return (
    <div className="px-4">
      {artists.length > 0 && songs.length > 0 && (
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

                {[...songs].splice(0, 4).map((song) => (
                  <SongCard key={song.id} {...song} />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      )}

      {artists.length > 0 && (
        <HomeSection
          listInfo={artists}
          title="Artists"
          type="artist"
          showAll={false}
        />
      )}

      {albums.length > 0 && (
        <HomeSection
          listInfo={albums}
          title={"Albums"}
          type="album"
          showAll={false}
        />
      )}

      {playlists.length > 0 && (
        <HomeSection
          listInfo={playlists}
          title={"Playlists"}
          type="playlist"
          showAll={false}
        />
      )}
    </div>
  );
};

export default Search;
