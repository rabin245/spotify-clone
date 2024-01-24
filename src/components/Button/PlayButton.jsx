import { BsFillPlayFill } from "react-icons/bs";
import { Button } from "reactstrap";

const PlayButton = ({ type = "normal", size = 30, play }) => {
  return (
    <Button
      className={`playButton ${
        type === "card" && "card--playButton"
      } rounded-circle border-0 d-flex justify-content-center align-items-center p-2 shadow`}
      onClick={play}
    >
      <BsFillPlayFill fill="black" size={size} />
    </Button>
  );
};

export default PlayButton;
