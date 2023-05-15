import { Container } from "reactstrap";
import { SectionCard } from "../Card";
import { useSetRecoilState } from "recoil";
import { currentPlayingSongAtom } from "../../recoilState";
import { startTransition } from "react";

const HomeSection = ({
  title,
  listInfo,
  type = "playlist",
  showAll = true,
}) => {
  const setCurrentPlayingSong = useSetRecoilState(currentPlayingSongAtom);

  return (
    <Container fluid className="p-0 my-4">
      <div className="d-flex justify-content-between align-items-end">
        <h2 className="fw-bold fs-3">{title}</h2>
        {showAll && (
          <a
            href="#"
            className="text-decoration-none text-white fw-bold"
            style={{
              fontSize: "0.8rem",
            }}
          >
            SHOW ALL
          </a>
        )}
      </div>
      <div className="homeSection--cards-wrapper d-flex mt-3 gap-2 px-1">
        {listInfo.map((item) => (
          <SectionCard
            key={item.id}
            id={item.id}
            type={type}
            playSong={() => {
              if (type === "artist") {
                console.log("no songs data for each artist");
                return;
              }
              startTransition(() => setCurrentPlayingSong(item.songs[0]));
            }}
          />
        ))}
      </div>
    </Container>
  );
};

export default HomeSection;
