import React from 'react';
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Courses from "../Courses/Courses";
import './Programs.css';
const Programs = () => {
    const [courses, setCourses]= useState([]);
    useEffect(() => {
    fetch('./courses.JSON')
    .then((res) => res.json())
    .then((data) => setCourses(data));
    },[])
    return (
        <div className="program-container">
        <h2 className="courses-title">Our Courses</h2>
        <Row xs={2} md={3} className="g-3 w-100">
        {
          courses.map(course => <Courses key = {course.id}course = {course}></Courses>
          )
        }
        </Row>
        </div>
    );
};

export default Programs;