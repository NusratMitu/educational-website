import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Courses.css';

const Courses = (props) => {
    console.log(props.course.title);
    const {title, price, img, instructor} = props.course;
    return (
        <div className="card-container">
           <Col>
          <Card>
            <Card.Img variant="top" src={img} className="course-img"/>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                by {instructor}
              </Card.Text>
              <Card.Title>
                $ {price}
              </Card.Title>
              <Button id="btn-style">Enroll</Button>
            </Card.Body>
          </Card>
        </Col>
        </div>
    );
};

export default Courses;