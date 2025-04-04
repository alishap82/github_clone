import React, { useState } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { auth, signInWithEmailAndPassword } from "../firebaseConfig"; 

const Login = () => {
  const [error, setError] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Handle Login
  const onSubmit = async (data) => {
    setError(""); // Reset error state
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      alert("Login Successful! 🎉");
      // Redirect to dashboard or home page
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      {/* GitHub Logo */}
      <img
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        alt="GitHub Logo"
        width={50}
        height={50}
        className="mb-3"
      />

      {/* Login Form Card */}
      <Card className="p-4 shadow-sm" style={{ width: "350px" }}>
        <h4 className="text-center mb-3">Sign in to GitHub</h4>
        
        {/* Display Error Message */}
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email"
              {...register("email", { required: "Email is required" })} 
            />
            {errors.email && <small className="text-danger">{errors.email.message}</small>}
          </Form.Group>

          {/* Password Input */}
          <Form.Group className="mb-3">
            <div className="d-flex justify-content-between">
              <Form.Label>Password</Form.Label>
              <a href="#" className="small">Forgot password?</a>
            </div>
            <Form.Control 
              type="password" 
              placeholder="Enter password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <small className="text-danger">{errors.password.message}</small>}
          </Form.Group>

          {/* Sign In Button */}
          <Button type="submit" variant="success" className="w-100">Sign in</Button>
        </Form>
      </Card>

      {/* Alternative Sign In */}
      <Card className="p-3 mt-3 text-center" style={{ width: "350px" }}>
        <a href="#" className="text-primary fw-bold">Sign in with a passkey</a>
        <p className="mt-2">New to GitHub? <a href="#">Create an account</a></p>
      </Card>

      {/* Footer Links */}
      <div className="mt-4 text-muted small">
        <a href="#" className="mx-2">Terms</a>
        <a href="#" className="mx-2">Privacy</a>
        <a href="#" className="mx-2">Docs</a>
        <a href="#" className="mx-2">Contact GitHub Support</a>
      </div>
    </Container>
  );
};

export default Login;
