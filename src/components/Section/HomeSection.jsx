import { Container } from "reactstrap";
import { PlaylistCard } from "../Card";

const HomeSection = ({ title, cards }) => {
  return (
    <Container fluid className="p-0 my-4">
      <div className="d-flex justify-content-between align-items-end">
        <h2 className="fw-bold fs-3">{title}</h2>
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
      <div className="homeSection--cards-wrapper d-flex mt-3 gap-2 px-1">
        {cards.map((item, i) => (
          <PlaylistCard
            key={i}
            imgSrc={item.imgSrc}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </Container>
  );
};

export default HomeSection;
