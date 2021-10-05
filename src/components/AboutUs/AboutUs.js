import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-container" >
            <div className="about-us">
                <p>About Us</p>
                <h1>Tomorrow’s skills, today</h1>
                <p>Our mission is to train the world’s workforce in the careers of the future. We partner with leading technology companies to learn how technology is transforming industries, and teach the critical tech skills that companies are looking for in their workforce. With our powerful and flexible digital education platform, even the busiest learners can prepare themselves to take on the most in-demand tech roles.</p>
            </div>
            <div>
                <h2> Contact us</h2>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                placeholder="Enter message"
                rows={3}
              />
            </Form.Group>
            <Button variant="" type="submit" id="btn-style" >
              Submit
            </Button>
          </Form>
            </div>
            <img src="about.png" alt="images" srcset="" />
        </div>
    );
};

export default AboutUs;