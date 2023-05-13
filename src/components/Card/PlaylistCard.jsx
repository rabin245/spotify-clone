import { BsFillPlayFill } from "react-icons/bs";
import { Button, Card, CardBody, CardText, Col } from "reactstrap";
import { useRecoilValue } from "recoil";
import { playlistState } from "../../recoilState";
import { Link } from "react-router-dom";

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
            <Button className="playButton rounded-circle border-0 d-flex justify-content-center align-items-center p-2 shadow">
              <BsFillPlayFill fill="black" size={30} />
            </Button>
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
