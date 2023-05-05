import React from "react";
import womanSpeaking from "../assets/images/woman_speaking.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaApple, FaAndroid, FaMicrosoft } from "react-icons/fa";
import { motion } from "framer-motion";
import { Transition } from "@headlessui/react";
import TextTransition, { presets } from "react-text-transition";
const TEXTS = ["disabilities", "disorders", "diseases"];

const Hero = () => {
  const [index, setIndex] = React.useState(0);
  const colour = "#f0b870";

  const variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => index + 1);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <motion.div
      className="hero-section bg-dark text-white min-h-screen flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container fluid className="px-0">
        <Row className="mx-auto flex-grow">
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="d-flex flex-column justify-content-center align-items-center px-4 px-sm-5 px-md-0">
              <Transition
                show={true}
                enter="transition-opacity ease-in-out duration-1000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-in-out duration-1000"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <motion.h1
                  className="text-center mb-5"
                  style={{ fontSize: "3rem" }}
                  initial="initial"
                  animate="animate"
                  transition={variants.transition}
                >
                  AI for{" "}
                  <TextTransition
                    springConfig={presets.gentle}
                    className="big"
                    style={{ margin: "0 4px", color: colour }}
                    inline
                  >
                    {`${TEXTS[index % TEXTS.length]}`.split("").map((txt, i) => (
                      <span key={i}>{txt}</span>

                    ))}
                  </TextTransition>
                </motion.h1>
              </Transition>

              <React.Fragment>
                <motion.p
                  className="text-center mt-2"
                  style={{ fontSize: "1.2rem", maxWidth: "500px" }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  Our innovative AI platform is designed to empower and
                  transform the healthcare industry. Experience a new level of
                  accessibility and inclusivity.
                </motion.p>
                <motion.div
                  className="mt-5 d-flex justify-content-center flex-wrap"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  <Button
                    variant="outline-light"
                    className="mr-3 mb-3"
                    style={{
                      fontSize: "1.2rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FaApple className="mr-2" />
                    <span>App Store</span>
                  </Button>
                  <Button
                    variant="outline-light"
                    className="mr-3 mb-3"
                    style={{
                      fontSize: "1.2rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FaAndroid className="mr-2" />
                    <span>Play Store</span>
                  </Button>
                  <Button
                    variant="outline-light"
                    className="mr-3 mb-3"
                    style={{
                      fontSize: "1.2rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FaMicrosoft className="mr-2" />
                    <span>Windows Store</span>
                  </Button>
                </motion.div>
              </React.Fragment>
            </div>
          </Col>
          <Col md={6} className="d-none d-md-block">
            <motion.img
              src={womanSpeaking}
              alt="woman_speaking"
              className="img-fluid"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            />
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Hero;
