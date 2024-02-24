import React from 'react';
import "./studentCorner.css";
import { Container, Row, Col } from 'reactstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const StudentCorner = () => {
    return(
    <>
    <Header />
    <Container fluid>
        <Row>
            <Col className='col-12 text-center py-4'>
                <h1 style={{color: 'white'}} className='headerImg'>Student's Corner</h1>
            </Col>
        </Row>
        <h1>Student's Corner</h1>
        <form id="contact_form" name="contact_form" method="post">
        
        <h2>Check Your Record</h2>
        <div className="mb-3 row">
          <div className="col-sm-8">
            <label>User name</label>
            <input
              type="text"
              required
              maxLength="50"
              className="form-control"
              id="username"
              name="username"
              placeholder='Enter your username '
            />
          </div>
          </div>
          <div className="mb-3 row">
          <div className="col-sm-8">
            <label htmlFor="email_addr">Email address</label>
            <input
              type="email"
              required
              maxLength="50"
              className="form-control"
              id="email_addr"
              name="email"
              placeholder="name@example.com"
            />
          </div>
          </div>
          <button type="submit" className='btn btn btn-success btngrp'>
          Check Record
        </button>
          </form>
        </Container>
    <Footer />
    </>
);
};

export default StudentCorner;
