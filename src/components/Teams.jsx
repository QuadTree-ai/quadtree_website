import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PriteshImg from "../assets/images/pritesh.jpg";
import { FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: "Pritesh Raj",
      title: "Founder",
      bio: "Pritesh is a visionary leader with a passion for innovation and excellence.",
      photoUrl: PriteshImg,
      socialLinks: [
        { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/priteshraj/" },
      ],
    },
  ];

  return (
    <div className="bg-dark py-10">
      <Container>
        <h2 className="text-white text-center text-4xl font-bold mb-10">
          We are qt's
        </h2>
        <Row className="justify-center">
          {teamMembers.map((member) => (
            <Col
              key={member.name}
              xs={12}
              sm={6}
              md={4}
              className="mb-4"
              data-aos="fade-up"
            >
              <div className="team-member-card bg-white rounded-lg shadow-md overflow-hidden flex transition-all duration-300 hover:shadow-lg">
                <div
                  className="team-member-card__image h-96 w-96 bg-cover bg-center bg-no-repeat transition duration-300 ease-in-out"
                  style={{
                    backgroundImage: `url(${member.photoUrl})`,
                    backgroundSize: "cover",
                    filter: "alpha(opacity=50)",
                  }}
                ></div>
                <div className="team-member-card__content p-3 flex flex-col justify-center w-64">
                  <h5 className="card-title text-lg font-bold mb-2">
                    {member.name}
                  </h5>
                  <p className="card-text text-gray-600 mb-2">{member.title}</p>
                  <div className="team-member-card__bio text-gray-600 text-sm leading-5">
                    {member.bio}
                  </div>
                  <div className="team-member-card__social-links mt-4 flex">
                    {member.socialLinks.map((socialLink, index) => (
                      <a
                        href={socialLink.url}
                        target="_blank"
                        rel="noreferrer"
                        key={index}
                        className="text-gray-500 hover:text-blue-500 mx-2"
                        style={{ fontSize: "1.5rem" }}
                      >
                        <socialLink.icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Team;