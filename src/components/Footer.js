import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGem,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint,
} from "react-icons/fa";
// import "./Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <footer
      className="ft bg-light text-center text-lg-start text-muted"
      data-aos="fade-right"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom mt-4">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <FaFacebookF color="secondary" />
          </a>
          <a href="" className="me-4 text-reset">
            <FaTwitter color="secondary" />
          </a>
          <a href="" className="me-4 text-reset">
            <FaGoogle color="secondary" />
          </a>
          <a href="" className="me-4 text-reset">
            <FaInstagram color="secondary" />
          </a>
          <a href="" className="me-4 text-reset">
            <FaLinkedin color="secondary" />
          </a>
          <a href="" className="me-4 text-reset">
            <FaGithub color="secondary" />
          </a>
        </div>
      </section>

      <section className="">
        <Container fluid className="text-center text-md-start mt-5">
          <Row className="mt-3 bg-light">
            <Col xs={12} md={3} lg={4} xl={3} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <FaGem color="secondary" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </Col>

            <Col xs={6} md={2} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              {/* Add similar links for other products */}
            </Col>

            <Col xs={6} md={3} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              {/* Add similar links for other useful links */}
            </Col>

            <Col xs={12} md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FaHome color="secondary" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <FaEnvelope color="secondary" className="me-3" />
                info@example.com
              </p>
              {/* Add similar lines for phone and print */}
            </Col>
          </Row>
        </Container>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://logo.com/">
          Logo.com
        </a>
      </div>
    </footer>
  );
}
