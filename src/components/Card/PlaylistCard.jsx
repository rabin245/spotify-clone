import { BsFillPlayFill } from "react-icons/bs";
import { Button, Card, CardBody, CardText, Col } from "reactstrap";

const PlaylistCard = ({ id, imgSrc, title, subtitle }) => {
  return (
    <Col md="2" className="p-0">
      <Card className="cardComp border-0 rounded-3 p-4">
        <div className="position-relative">
          <img src={imgSrc} alt="..." className="w-100 rounded-3 shadow" />
          <Button className="playButton rounded-circle border-0 d-flex justify-content-center align-items-center p-2 shadow">
            <BsFillPlayFill fill="black" size={30} />
          </Button>
        </div>
        <CardBody className="m-0 p-0 mt-4">
          <CardText className="m-0 fw-bold fs-5">{title}</CardText>
          <CardText className="cardSubtitle m-0">{subtitle}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PlaylistCard;
