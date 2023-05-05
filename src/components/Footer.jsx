import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMicrosoft,
  FaAppStoreIos,
  FaGooglePlay,
} from "react-icons/fa";
import socialData from "../data/socialData.json";
import footerData from "../data/footerData.json";
import { Container, Row, Col, Button } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-5 pb-0 relative">
      <div className="bg-black opacity-75 absolute inset-0"></div>
      <Container className="relative mt-2 py-10">
        <Row className="justify-center">
          <Col xs={12} md={4} lg={3} className="mb-8 md:mb-0 text-center">
            <h5 className="mb-4 font-bold text-white">About Us</h5>
            <p className="text-gray-400 mb-4">
              QuadTree.ai is a machine learning and artificial intelligence
              company that specializes in developing intelligent solutions for
              businesses across various industries.
            </p>
            <ul className="list-inline">
              {socialData.Social.map((social, index) => (
                <li key={index} className="list-inline-item mx-2">
                  <a
                    href={social.url}
                    className="text-gray-400 hover:text-white"
                  >
                    {social.icon === "FaFacebookF" && (
                      <FaFacebookF className="text-4xl" />
                    )}
                    {social.icon === "FaTwitter" && (
                      <FaTwitter className="text-4xl" />
                    )}
                    {social.icon === "FaInstagram" && (
                      <FaInstagram className="text-4xl" />
                    )}
                    {social.icon === "FaYoutube" && (
                      <FaYoutube className="text-4xl" />
                    )}
                    {social.icon === "FaLinkedin" && (
                      <FaLinkedin className="text-4xl" />
                    )}
                  </a>
                </li>
              ))}
              <div className="text-center mt-12" style={{ fontSize: "1.0rem" }}>
                <Container>
                  <Row>
                    <Col xs={12} className="text-center">
                      <p className="text-gray-400 mb-0">
                        © {currentYear} QuadTree.ai. All rights reserved.
                      </p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </ul>
          </Col>
          {footerData.categories.map((category, index) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              className="mb-8 md:mb-0 text-center"
            >
              <h5 className="mb-4 font-bold text-white">{category.name}</h5>
              <ul className="list-unstyled">
                {category.links.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
          <div className="d-flex flex-wrap justify-center">
            <Button variant="outline-light" className="mb-2 mr-2">
              <FaMicrosoft className="text-4xl" />
            </Button>
            <Button variant="outline-light" className="mb-2 mr-2">
              <FaAppStoreIos className="text-4xl" />
            </Button>
            <Button variant="outline-light" className="mb-2 mr-2">
              <FaGooglePlay className="text-4xl" />
            </Button>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
