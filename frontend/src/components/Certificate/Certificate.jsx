import React from 'react';
import "./certificate.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Col, Container, Row } from 'reactstrap';


const Certificate = () => {
    return(
        <>
        <Header />
        <Container fluid>
            <Row>
                <Col className='col-12 text-center py-4'>
                    <h1 style={{color: 'white'}} className='headerImg'>CERTIFICATE VERIFICATION</h1>
                </Col>
            </Row>
        </Container>

        {/* <h1 className='second-header'>Please enter certificate Number</h1> */}
        <form id="verify_form" name="verify_form" method="post" className='verifyform'>
        <div className="mb-3 row">
          <div className="col-sm-8">
            <label>Certification Number</label>
            <input
              type="text"
              required
              maxLength="20"
              className="form-control"
              id="cert_num"
              name="cert_num"
              placeholder='Enter your certificate number'
            />
          </div>
          </div>
          <button type="submit" className='btn btn-success '>Verify</button>
        </form>
        <Footer />
        </>

    );
};

export default Certificate;
