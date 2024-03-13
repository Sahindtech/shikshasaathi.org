import React, { Fragment, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TypedText from "./TypedText";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import "../components/Contact/contact.css";
import "../components/About/about.css";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../components/Courses/courses.css";
import "../components/Gallery/gallery.css";
import Img from "../assests/images/seo.png";
import aboutImg from "../assests/images/about-us.png";
import heroImg from "../assests/images/woman-5835657_1280.jpg";
import "../components/Hero-Section/hero-section.css";
import "../App.css";
const Home = () => {
  const [selectedBackground, setSelectedBackground] = useState(heroImg);

  useEffect(() => {
    fetch("http://localhost:5050/update-background")
      .then((response) => response.json())
      .then((data) => {
        setSelectedBackground(data.backgroundUrl || heroImg);
      })
      .catch((error) => console.error("Error fetching background:", error));
  }, []);
  return (
    <Fragment>
      <div className="home-background">
        <Header />

        {/* Hero section start */}
        <section
          className="hero-image"
          style={{
            backgroundImage: `url(${selectedBackground})`,
            backgroundSize: "cover",
          }}
        >
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
                    high-quality academic programs blend with practical
                    approach, caring faculty and meticulous administration.
                  </p>
                </div>
                <div className="search">
                  <input type="text" placeholder="Search" />
                  <button className="btn">Search</button>
                </div>
              </Col>

              {/* <Col lg="6" md="6">
                <img src={heroImg} alt="" className="w-100 hero__img" />
              </Col> */}
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
                  Shiksha Saathi Institute has a strong focus on quality
                  training and has pioneered a unique way to groom students with
                  its Smart lab Plus training methodology. The Institute trains
                  students in soft skills, presentation skills, fluency in
                  English, personality development training which allows
                  students to develop great focus and concentration. Shiksha
                  Saathi Training Institute students walk out with an extra edge
                  and leave as industry ready professionals. Shiksha Saathi
                  Institute is a proven learning center for skill development &
                  vocational education. We have proved our expertise at every
                  level. We have trained more 10000+ students of various fields
                  like Btech/Diploma, BCA, MCA, MBA and even school going
                  students. Our business is dedicated to delivering good
                  quality, inexpensive services that will improve the quality of
                  work at all levels in an organization.
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
          <Container fluid>
            <Row>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  autoplay: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <Col lg="3" md="6">
                  <SwiperSlide>
                    <Card
                      style={{ width: "24rem" }}
                      className={`gallery__item`}
                    >
                      <Card.Body>
                        <Card.Title>Master of Computer Applications</Card.Title>
                        <Card.Text>
                          MCA is a postgraduate degree program designed to
                          provide students with a deep understanding of computer
                          applications and software development.
                        </Card.Text>
                        <Button variant="primary">About more info.. </Button>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Col>
                <Col lg="3" md="6">
                  <SwiperSlide>
                    <Card
                      style={{ width: "24rem" }}
                      className={`gallery__item`}
                    >
                      <Card.Body>
                        <Card.Title>
                          Bachelor's of Computer Applications
                        </Card.Title>
                        <Card.Text>
                          BCA is an undergraduate degree program designed to
                          equip students with a strong foundation in computer
                          applications and software development.
                        </Card.Text>
                        <Button variant="primary">About more info.. </Button>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Col>
                <Col lg="3" md="6">
                  <SwiperSlide>
                    <Card
                      style={{ width: "24rem" }}
                      className={`gallery__item`}
                    >
                      <Card.Body>
                        <Card.Title>Master of Computer Applications</Card.Title>
                        <Card.Text>
                          MCA is a postgraduate degree program designed to
                          provide students with a deep understanding of computer
                          applications and software development.
                        </Card.Text>
                        <Button variant="primary">About more info.. </Button>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Col>
                <Col lg="3" md="6">
                  <SwiperSlide>
                    <Card
                      style={{ width: "24rem" }}
                      className={`gallery__item`}
                    >
                      <Card.Body>
                        <Card.Title>
                          Bachelor's of Computer Applications
                        </Card.Title>
                        <Card.Text>
                          BCA is an undergraduate degree program designed to
                          equip students with a strong foundation in computer
                          applications and software development.
                        </Card.Text>
                        <Button variant="primary">About more info.. </Button>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Col>
                <Col lg="3" md="6">
                  <SwiperSlide>
                    {" "}
                    <Card
                      style={{ width: "24rem" }}
                      className={`gallery__item`}
                    >
                      <Card.Body>
                        <Card.Title>Bachelor of Technology </Card.Title>
                        <Card.Text>
                          B.Tech is an undergraduate degree program focused on
                          providing students with a strong foundation in
                          engineering principles and technical skills.
                        </Card.Text>
                        <Button variant="primary">About more info.. </Button>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Col>
                <Col lg="3" md="6">
                  <SwiperSlide>
                    {" "}
                    <Card
                      style={{ width: "24rem" }}
                      className={`gallery__item`}
                    >
                      <Card.Body>
                        <Card.Title>Master of Science </Card.Title>
                        <Card.Text>
                          B.Tech is an undergraduate degree program focused on
                          providing students with a strong foundation in
                          engineering principles and technical skills.
                        </Card.Text>
                        <Button variant="primary">About more info.. </Button>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Col>
                <Col lg="3" md="6">
                  <SwiperSlide>
                    {" "}
                    <Card
                      style={{ width: "24rem" }}
                      className={`gallery__item`}
                    >
                      <Card.Body>
                        <Card.Title>Bachelor's of Science </Card.Title>
                        <Card.Text>
                          B.Tech is an undergraduate degree program focused on
                          providing students with a strong foundation in
                          engineering principles and technical skills.
                        </Card.Text>
                        <Button variant="primary">About more info.. </Button>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Col>
                <Col lg="3" md="6">
                  <SwiperSlide>
                    {" "}
                    <Card
                      style={{ width: "24rem" }}
                      className={`gallery__item`}
                    >
                      <Card.Body>
                        <Card.Title>B. Pharma</Card.Title>
                        <Card.Text>
                          B.Tech is an undergraduate degree program focused on
                          providing students with a strong foundation in
                          engineering principles and technical skills.
                        </Card.Text>
                        <Button variant="primary">About more info.. </Button>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Col>
                <Col lg="3" md="6">
                  <SwiperSlide>
                    {" "}
                    <Card
                      style={{ width: "24rem" }}
                      className={`gallery__item`}
                    >
                      <Card.Body>
                        <Card.Title>PGDCA </Card.Title>
                        <Card.Text>
                          B.Tech is an undergraduate degree program focused on
                          providing students with a strong foundation in
                          engineering principles and technical skills.
                        </Card.Text>
                        <Button variant="primary">About more info.. </Button>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Col>
              </Swiper>
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
      </div>
    </Fragment>
  );
};

export default Home;
