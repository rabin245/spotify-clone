import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Suspense } from "react";
import { MusicPlayer } from "./components/MusicPlayer";

function App() {
  return (
    <>
      <Container fluid className="p-0">
        <Row className="m-0">
          <Col
            md={4}
            lg={3}
            xl={2}
            className="position-fixed p-0 d-none d-md-block"
          >
            <Sidebar />
          </Col>
          <Col
            xs={12}
            md={8}
            lg={9}
            xl={10}
            className="p-0 offset-md-4 offset-lg-3 offset-xl-2"
          >
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
            <Footer />
          </Col>
          <MusicPlayer />
        </Row>
      </Container>
    </>
  );
}

export default App;
