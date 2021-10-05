import React from 'react';
import { Accordion, Carousel } from 'react-bootstrap';
import './StudentSuccess.css'
const StudentSuccess = () => {
    return (
        <div>
            <div className="feedback">
                
            <h2>Success Stories from Our Students</h2>
            <Carousel>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="bg-grey.png"
      alt="First slide"
    />
    <Carousel.Caption className= "fs-1">
      <p>“This experience has absolutely changed my life — Now I work at a leading software company.”
    </p>
    <h3 className="fw-bold">— Sakib hasan</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="bg-grey.png"
      alt="Second slide"
    />
    <Carousel.Caption className= " fs-1 py-2">
    <p>“Understanding programming now helps me to look at problems through the lens of a language, and it translates to everything I do.”
    </p>
    <h3 className="fw-bold">— Afrin Islam</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="bg-grey.png"
      alt="Third slide"
    />
    <Carousel.Caption className= " fs-1 py-2">
    <p>“You're not just taught what to do; you're taught how to think.”
    </p>
    <h3 className="fw-bold">— Alia Ahmed</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="bg-grey.png"
      alt="Forth slide"
    />
    <Carousel.Caption className= " fs-1 py-2">
    <p>“I think where the real value lies in edemy's approach to learning is how the people at Udacity make you feel about your accomplishments.”
    </p>
    <h3 className="fw-bold">— Tamim</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="1">
    <Accordion.Header>How can I contact with them?</Accordion.Header>
    <Accordion.Body>
    Connect them on linkdin.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>How do I take more courses? </Accordion.Header>
    <Accordion.Body>
    Become a member of our community helps you to take more courses with less price 
    </Accordion.Body>
  </Accordion.Item>
</Accordion>  
            </div>
        </div>
    );
};

export default StudentSuccess;