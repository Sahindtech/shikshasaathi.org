import React, { Fragment } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import TypedText from "./TypedText";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import "../components/Contact/contact.css";
import "../components/About/about.css";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../components/Courses/courses.css";
import "../components/Gallery/gallery.css";
import Img from "../assests/images/seo.png";
import aboutImg from "../assests/images/about-us.png";

import heroImg from "../assests/images/hero-img1.png";
import "../components/Hero-Section/hero-section.css";

const Home = () => {
  return (
    <Fragment>
      <Header />
      {/* Hero section start */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h2 className="mb-4 hero__title">
                  Welcome to <TypedText />
                </h2>
                <p className="mb-5">
                  Our focus at Shiksha Saathi is to provide our students with
                  best education and
                  <br />
                  to prepare them for rewarding careers in CAD/CAM, IT/CS &
                  other competitive fields. <br />
                  We accomplish this by creating a unique educational
                  environment through <br />
                  high-quality academic programs blend with practical approach,
                  caring faculty and meticulous administration.
                </p>
              </div>
              <div className="search">
                <input type="text" placeholder="Search" />
                <button className="btn">Search</button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={heroImg} alt="" className="w-100 hero__img" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ABout us start */}
      <Container fluid>
        <Row>
          <Col className="col-12 text-center py-4">
            <h1>About Us</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={5}>
            <div className="left-content">
              <img src={aboutImg} alt="aboutImg" />
            </div>
          </Col>
          <Col sm={7}>
            <div className="main-content">
              <h2>Shikshasaathi </h2>

              <p>
                Shiksha Saathi Institute has a strong focus on quality training
                and has pioneered a unique way to groom students with its Smart
                lab Plus training methodology. The Institute trains students in
                soft skills, presentation skills, fluency in English,
                personality development training which allows students to
                develop great focus and concentration. Shiksha Saathi Training
                Institute students walk out with an extra edge and leave as
                industry ready professionals. Shiksha Saathi Institute is a
                proven learning center for skill development & vocational
                education. We have proved our expertise at every level. We have
                trained more 10000+ students of various fields like
                Btech/Diploma, BCA, MCA, MBA and even school going students. Our
                business is dedicated to delivering good quality, inexpensive
                services that will improve the quality of work at all levels in
                an organization.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Courses start */}

      <Container fluid>
        <Row>
          <Col className="col-12 text-center py-4">
            <h1>Our Courses</h1>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>MCA</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">About more info.. </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>MCA</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">About more info.. </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>MCA</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">About more info.. </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>MCA</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">About more info.. </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>MCA</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">About more info.. </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>MCA</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">About more info.. </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>MCA</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">About more info.. </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>MCA</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">About more info.. </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>MCA</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">About more info.. </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>MCA</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">About more info.. </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>MCA</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">About more info.. </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>MCA</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">About more info.. </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Gallery starts */}

      <h1>Gallery</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Img} className={`gallery__item`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img} className={`gallery__item`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Img} className={`gallery__item`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Img} className={`gallery__item`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Img} className={`gallery__item`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Img} className={`gallery__item`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Img} className={`gallery__item`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Img} className={`gallery__item`} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Img} className={`gallery__item`} alt="" />
        </SwiperSlide>
      </Swiper>

      <Footer />
    </Fragment>
  );
};

export default Home;
