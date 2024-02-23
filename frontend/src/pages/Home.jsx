import React, { Fragment } from "react";
import "../components/Contact/contact.css";
import "../components/About/about.css";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../components/Courses/courses.css";
import "../components/Gallery/gallery.css";
import Img from "../assests/images/seo.png";
import aboutImg from "../assests/images/about-us.png";
// import { Container, Row, Col } from "reactstrap";
import heroImg from "../assests/images/hero-img1.png";
import "../components/Hero-Section/hero-section.css";
const images = [
  { src: { Img }, alt: "Image 1" },
  { src: { Img }, alt: "Image 2" },
  { src: { Img }, alt: "Image 3" },
  { src: { Img }, alt: "Image 4" },
  { src: { Img }, alt: "Image 5" },
];
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
                  Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
                </h2>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Aut saepe voluptatum earum delectus <br /> deserunt id
                  iste, quas officiis et repellat!
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
      <div className="gallery ">
        {images.map((image, index) => (
          <img src={Img} alt="" className=" gallery__item " />
        ))}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
