import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { PlaylistCard } from "../components/Card";

const Search = () => {
  const { query } = useParams();
  const playlistCards = Array(5).fill({
    imgSrc: "https://picsum.photos/200/200",
    title: "Chill Hits",
    subtitle: "Kick back to the best new and recent chill tunes.",
  });
  return (
    <div className="px-4">
      {!query && (
        <Container fluid className="p-0 my-4">
          <div className="d-flex justify-content-between align-items-end">
            <h2 className="fw-bold fs-3">Spotify's Playlists</h2>
            <a
              href="#"
              className="text-decoration-none text-white fw-bold"
              style={{
                fontSize: "0.8rem",
              }}
            >
              SHOW ALL
            </a>
          </div>
          <div className="d-flex mt-3 gap-2 px-1 flex-wrap">
            {playlistCards.map((item, i) => (
              <PlaylistCard
                key={i}
                imgSrc={item.imgSrc}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </Container>
      )}
      Searching for &ldquo;{query}&rdquo;
    </div>
  );
};

export default Search;
