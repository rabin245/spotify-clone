import { Card, CardBody, CardText, Col } from "reactstrap";
import { useRecoilValue } from "recoil";
import { playlistState } from "../../recoilState";
import { Link } from "react-router-dom";
import PlayButton from "../Button/PlayButton";

const PlaylistCard = ({ id }) => {
  const playlist = useRecoilValue(playlistState(id));
  console.log("playlist state", id, playlist);
  const { name, description, image_url } = playlist;

  return (
    <Col lg={3} md={4} xs={3} className="p-0">
      <Link to={`/playlist/${id}`} className="card-link">
        <Card className="cardComp border-0 rounded-3 p-4">
          <div className="position-relative">
            <img src={image_url} alt="..." className="w-100 rounded-3 shadow" />
            <PlayButton type="card" />
          </div>
          <CardBody className="m-0 p-0 mt-4">
            <CardText className="m-0 fw-bold fs-5">{name}</CardText>
            <CardText className="cardSubtitle m-0">{description}</CardText>
          </CardBody>
        </Card>
      </Link>
    </Col>
  );
};

export default PlaylistCard;
