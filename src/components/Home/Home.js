import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
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
      <h2 className="program-title">Top Programs</h2>
      <Row xs={2} md={3} className="g-3 w-100">
        {
          courses.slice(0,3).map(course =><Courses key={course.id} course = {course}></Courses>
          )
        }
      </Row>
    </div>
  );
};

export default Home;