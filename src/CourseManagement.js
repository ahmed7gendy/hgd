import React, { useState, useEffect } from 'react';
import { database } from './firebase';

function CourseManagement() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const snapshot = await database.ref('courses').once('value');
      const data = snapshot.val();
      setCourses(data ? Object.values(data) : []);
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Course Management</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseManagement;
