import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaApple, FaGoogle } from "react-icons/fa";
import { ReactComponent as BlindWomanWalking } from "../../assets/images/Blind_woman_walking.svg";

const LoginModal = ({ show, handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-lg font-medium">
          Log in to QuadTree.ai
        </Modal.Title>
      </Modal.Header>
      <div className="bg-white rounded-md shadow-md p-4">
        <div className="flex justify-center items-center">
          <BlindWomanWalking
            width="200"
            height="200"
            style={{ filter: "drop-shadow(2px 2px 3px rgba(0,0,0,0.6))" }}
          />
        </div>
        <div className="mt-6 flex justify-center">
          <Button
            className="mx-2 py-3 px-6 rounded-md border-2 border-gray-300 text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            style={{ width: "11rem" }}
          >
            <FaApple className="mr-2" />
            Sign in with Apple
          </Button>
          <Button
            className="mx-2 py-3 px-6 rounded-md border-2 border-gray-300 text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            style={{ width: "11rem" }}
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </Button>
        </div>
        <div className="mt-6">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <div className="flex justify-center">
              <Button
                variant="primary"
                type="submit"
                className="py-3 px-6 rounded-md border-2 border-gray-300 text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Log in
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
