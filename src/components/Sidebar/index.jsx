import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { BsGlobe, BsPlusSquareFill } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { Container } from "reactstrap";
import { Button } from "../Button";

export default function Sidebar() {
  return (
    <>
      <div className="vh-100 bg-black text-center ps-3">
        <Container className="d-flex flex-column p-0">
          <Container className="p-0 d-flex flex-column justify-content-between vh-100 ">
            <div>
              <div className="ps-2 pt-2 d-flex align-items-center mb-4 mt-3">
                <FaSpotify size={40} />
                <span className="ms-2 fw-bold fs-3">Spotify</span>
              </div>
              <div>
                <Container className="d-flex flex-column">
                  <div className="fw-semibold d-flex align-items-center mb-3">
                    <AiOutlineHome size={24} className="me-3" />
                    Home
                  </div>
                  <div className="fw-semibold d-flex align-items-center mb-3">
                    <AiOutlineSearch size={24} className="me-3" />
                    Search
                  </div>
                  <div className="fw-semibold d-flex align-items-center mb-3">
                    <BiLibrary size={24} className="me-3" />
                    Library
                  </div>
                </Container>
                <Container className="d-flex flex-column mt-3 mb-auto">
                  <div className="fw-semibold d-flex align-items-center mb-3">
                    <BsPlusSquareFill size={24} className="me-3" />
                    Create Playlist
                  </div>
                  <div className="fw-semibold d-flex align-items-center mb-3">
                    <FcLike size={24} className="me-3" />
                    Liked Songs
                  </div>
                </Container>
              </div>
            </div>

            <Container className="mb-4">
              <div className="fs-6 text-gray d-flex flex-column ">
                <div className="text-start mb-3">
                  <span className="fs-6 fw-light me-2">Legal </span>
                  <span className="fs-6 fw-light me-2">Privacy Center </span>
                  <br />
                  <span className="fs-6 fw-light me-2">Privacy Policy </span>
                  <span className="fs-6 fw-light me-2">Privacy Policy </span>
                  <br />
                  <span className="fs-6 fw-light me-2">Cookies </span>
                  <span className="fs-6 fw-light me-2">About </span>
                  <br />
                  <span className="fs-6 fw-light">Ads </span>
                </div>
                <Button type="normal">
                  <BsGlobe size={24} className="me-1" />
                  <span className="fs-6 fw-semibold">English</span>
                </Button>
              </div>
            </Container>
          </Container>
        </Container>
      </div>
    </>
  );
}
