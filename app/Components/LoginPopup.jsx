import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const LoginPopup = ({ show, handleClose, onLogin }) => {
  const [academicNumber, setAcademicNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const isAdmin = academicNumber === "admin123"; // Demo logic
    onLogin({ academicNumber, isAdmin });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Academic Number</Form.Label>
            <Form.Control
              type="text"
              value={academicNumber}
              onChange={(e) => setAcademicNumber(e.target.value)}
              placeholder="Enter your academic number"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="primary" onClick={handleLogin}>Login</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginPopup;
