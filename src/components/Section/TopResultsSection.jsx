import { Badge, Card, CardBody, Col } from "reactstrap";
import PlayButton from "../Button/PlayButton";

export default function TopResultsSection({ artists }) {
  return (
    <Col xs={12} md={8} lg={5} className="p-0 m-0">
      <div>
        <h2 className="mb-2 fw-bold">Top result</h2>

        <Card className="cardComp border-0 rounded-3 p-4">
          <CardBody className="p-0">
            <div className="d-flex flex-column align-items-start gap-4">
              <img
                src={artists[0].image_url}
                alt="top-artist"
                className="rounded-circle img-fluid shadow"
                width="92"
              />
              <h2 className="fw-bold">{artists[0].name}</h2>
              <Badge color="dark" className="rounded-5 fw-bold">
                Artist
              </Badge>
              <PlayButton type="card" />
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
}
