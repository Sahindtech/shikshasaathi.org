import React from "react";
import Header from "../Header/Header";
import aboutImg from "../../assests/images/about-us.png";
import Footer from "../Footer/Footer";
import { Col, Container, Row } from "reactstrap";
import "./about.css";

const About = () => {
  return (
    <>
      <Header />
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

      <Footer />
    </>
  );
};

export default About;
