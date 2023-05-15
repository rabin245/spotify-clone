import { Card, CardBody, CardText, Col } from "reactstrap";
import { useRecoilValue } from "recoil";
import { albumState, artistState, playlistState } from "../../recoilState";
import { useNavigate } from "react-router-dom";
import PlayButton from "../Button/PlayButton";

const SectionCard = ({ id, type = "playlist", playSong }) => {
  const cardInfo = useRecoilValue(
    type === "playlist"
      ? playlistState(id)
      : type === "album"
      ? albumState(id)
      : artistState(id)
  );

  const navigate = useNavigate();

  const linkTo = type === "playlist" ? `/playlist/${id}` : `/album/${id}`;

  const handleNavigate = () => {
    navigate(linkTo);
  };

  const handlePlay = (e) => {
    e.stopPropagation();
    playSong();
  };

  if (type === "artist")
    return (
      <Col lg={2} md={4} xs={3} className="p-0">
        <Card
          className="cardComp border-0 rounded-3 p-4"
          onClick={handleNavigate}
        >
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
            <PlayButton type="card" play={(e) => handlePlay(e)} />
          </div>
        </Card>
      </Col>
    );

  return (
    <Col lg={3} md={4} xs={3} className="p-0">
      <Card
        className="cardComp border-0 rounded-3 p-4"
        onClick={handleNavigate}
      >
        <div className="position-relative">
          <img
            src={cardInfo.image_url}
            alt="..."
            className="w-100 rounded-3 shadow"
          />
          <PlayButton type="card" play={(e) => handlePlay(e)} />
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
    </Col>
  );
};

export default SectionCard;
