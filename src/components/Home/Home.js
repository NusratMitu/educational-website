import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row, Carousel } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import './Home.css';

const Home = () => {
  const [courses, setCourses]= useState([]);
  useEffect(() => {
    fetch('./courses.JSON')
    .then((res) => res.json())
    .then((data) => setCourses(data));
  },[])
  return (
    <div className="home-container">
      <div className="home-banner">
        <div><h1 >Welcome To <br /> <span className="title-name">edemy</span> </h1>
        <p>An amazing opportunity to learn new skill</p>
        </div>
        <img src="elearning.jpg" alt="images" srcset="" />
      </div>
      <h2 className="title">Top Programs</h2>
      {/* programs section */}
      <Row xs={2} md={3} className="g-3 w-100">
        {
          courses.slice(0,3).map(course =><Courses key={course.id} course = {course}></Courses>
          )
        }
      </Row>
      {/* recommended topics section */}
     <div>
     <h2 className="title">Topics recommended for you</h2>
    <Row xs={2} md={4} className="g-2 w-100 row-style">
     <Col className="col-style">Web Development</Col>
     <Col className="col-style">Front End Web Development</Col>
     <Col className="col-style"> React</Col>
     <Col className="col-style">Javascript</Col>
     <Col className="col-style">App Development</Col>
     <Col className="col-style">UI/UX Design</Col>
     <Col className="col-style">Data Analysis</Col>
     <Col className="col-style">Redux Framework</Col>
    </Row>
     </div>
       {/*review section  */}
    <div className= " review-container">
    <div className= " fs-4 my-3 review">
    <p>“I used to fear programming. But now, I am in love with programming because of edemy.”
    </p>
    <h3 className="">— Sadek</h3>
    </div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe_cDEs59IJRqgpYZ2nHKCkQH5bu2FVXBaog&usqp=CAU" alt="images" srcset="" />
    </div>
      
    </div>
  );
};

export default Home;