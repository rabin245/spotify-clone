import { BsFillPlayFill } from "react-icons/bs";
import {
  Button,
  Card,
  CardBody,
  CardText,
  Col,
  Container,
  Row,
} from "reactstrap";

const Home = () => {
  return (
    <div className="homePage px-4">
      <Container fluid className="p-0 my-4">
        <div className="d-flex justify-content-between align-items-end">
          <h2 className="fw-bold fs-3">Focus</h2>
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
        <Row className="mt-3 gap-5 px-1">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Col key={i} md="2" className="p-0 ">
                <Card className="cardComp border-0 rounded-3 p-4">
                  <div className="position-relative">
                    <img
                      src="https://picsum.photos/200/200"
                      alt="..."
                      className="w-100 rounded-3 shadow"
                    />
                    <Button className="playButton rounded-circle border-0 d-flex justify-content-center align-items-center p-2 shadow">
                      <BsFillPlayFill fill="black" size={24} />
                    </Button>
                  </div>
                  <CardBody className="m-0 p-0 mt-4">
                    <CardText className="m-0 fw-bold fs-5">
                      Peaceful Piano
                    </CardText>
                    <CardText className="cardSubtitle m-0">
                      Relax and indulge with beautiful piano pieces
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
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
        <Row className="mt-3 gap-5 px-1">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Col key={i} md="2" className="p-0 ">
                <Card className="cardComp border-0 rounded-3 p-4">
                  <div className="position-relative">
                    <img
                      src="https://picsum.photos/200/200"
                      alt="..."
                      className="w-100 rounded-3 shadow"
                    />
                    <Button className="playButton rounded-circle border-0 d-flex justify-content-center align-items-center p-2 shadow">
                      <BsFillPlayFill fill="black" size={24} />
                    </Button>
                  </div>
                  <CardBody className="m-0 p-0 mt-4">
                    <CardText className="m-0 fw-bold fs-5">Chill Hits</CardText>
                    <CardText className="cardSubtitle m-0">
                      Kick back to the best new and recent chill tunes.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
