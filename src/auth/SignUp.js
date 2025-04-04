import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./Signup.css"; // Custom CSS file

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Signup successful!");
  };

  return (
    <Container fluid className="signup-container">
      <Row className="vh-100 d-flex align-items-center justify-content-center">
        
        {/* Left Side - Graphics */}
        <Col md={6} className="d-flex flex-column justify-content-center text-white p-5">
          <h1>Create your free account</h1>
          <p>Explore GitHub’s core features for individuals and organizations.</p>
          <a href="#" className="text-white text-decoration-underline">See what’s included</a>
        </Col>

        {/* Right Side - Signup Form */}
        <Col md={6} className="d-flex justify-content-center">
          <Card className="p-4 shadow-sm signup-card">
            <h4 className="mb-3">Sign up to GitHub</h4>

            <Form onSubmit={handleSubmit(onSubmit)}>

              {/* Email */}
              <Form.Group className="mb-3">
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <small className="text-danger">{errors.email.message}</small>}
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3">
                <Form.Label>Password*</Form.Label>
                <Form.Control type="password" placeholder="Enter password"
                  {...register("password", { required: "Password is required", minLength: { value: 8, message: "Must be at least 8 characters" } })}
                />
                {errors.password && <small className="text-danger">{errors.password.message}</small>}
              </Form.Group>

              {/* Username */}
              <Form.Group className="mb-3">
                <Form.Label>Username*</Form.Label>
                <Form.Control type="text" placeholder="Enter username"
                  {...register("username", { required: "Username is required" })}
                />
                {errors.username && <small className="text-danger">{errors.username.message}</small>}
              </Form.Group>

              {/* Country */}
              <Form.Group className="mb-3">
                <Form.Label>Your country*</Form.Label>
                <Form.Select {...register("country", { required: "Country is required" })}>
                  <option value="">Select Country</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </Form.Select>
                {errors.country && <small className="text-danger">{errors.country.message}</small>}
              </Form.Group>

              {/* Email Preferences */}
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Receive occasional product updates and announcements" {...register("emailPrefs")} />
              </Form.Group>

              {/* Submit Button */}
              <Button type="submit" variant="dark" className="w-100">Continue →</Button>
            </Form>

            {/* Terms & Links */}
            <p className="mt-3 text-muted small">
              By creating an account, you agree to the <a href="#">Terms of Service</a>. Read the <a href="#">GitHub Privacy Statement</a>.
            </p>
          </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default Signup;
