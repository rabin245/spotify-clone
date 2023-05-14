import { Card, CardBody, CardText, Col } from "reactstrap";
import { useRecoilValue } from "recoil";
import { albumState, artistState, playlistState } from "../../recoilState";
import { Link } from "react-router-dom";
import PlayButton from "../Button/PlayButton";

const SectionCard = ({ id, type = "playlist" }) => {
  const cardInfo = useRecoilValue(
    type === "playlist"
      ? playlistState(id)
      : type === "album"
      ? albumState(id)
      : artistState(id)
  );

  const linkTo = type === "playlist" ? `/playlist/${id}` : `/album/${id}`;

  if (type === "artist")
    return (
      <Col lg={2} md={4} xs={3} className="p-0">
        <Link to={linkTo} className="card-link">
          <Card className="cardComp border-0 rounded-3 p-4">
            <div className="position-relative">
              <img
                src={cardInfo.image_url}
                alt="..."
                className="rounded-circle shadow img-fluid"
              />
              <CardBody className="m-0 p-0 mt-4">
                <CardText className="cardTitle m-0 fw-bold fs-5 text-center">
                  {cardInfo.name}
                </CardText>
              </CardBody>
              <PlayButton type="card" />
            </div>
          </Card>
        </Link>
      </Col>
    );

  return (
    <Col lg={3} md={4} xs={3} className="p-0">
      <Link to={linkTo} className="card-link">
        <Card className="cardComp border-0 rounded-3 p-4">
          <div className="position-relative">
            <img
              src={cardInfo.image_url}
              alt="..."
              className="w-100 rounded-3 shadow"
            />
            <PlayButton type="card" />
          </div>
          <CardBody className="m-0 p-0 mt-4">
            <CardText className="cardTitle m-0 fw-bold fs-5">
              {cardInfo.name}
            </CardText>
            <CardText className="cardSubtitle m-0">
              {type === "playlist" ? cardInfo.description : cardInfo.artist}
            </CardText>
          </CardBody>
        </Card>
      </Link>
    </Col>
  );
};

export default SectionCard;
