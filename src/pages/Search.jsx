import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { SectionCard } from "../components/Card";
import { useRecoilValue } from "recoil";
import { defaultPlaylistsAtom } from "../recoilState";

const Search = () => {
  const { query } = useParams();

  const defaultPlaylists = useRecoilValue(defaultPlaylistsAtom);

  return (
    <div className="px-4">
      {!query && (
        <Container fluid className="p-0 my-4">
          <div className="d-flex justify-content-between align-items-end">
            <h2 className="fw-bold fs-3">Spotify&apos;s Playlists</h2>
          </div>
          <div className="d-flex mt-3 gap-2 px-1 flex-wrap">
            {defaultPlaylists.map((playlist) => (
              <SectionCard key={playlist.id} id={playlist.id} />
            ))}
          </div>
        </Container>
      )}
      Searching for &ldquo;{query}&rdquo;
    </div>
  );
};

export default Search;
