import React from 'react';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import CourseManagement from './CourseManagement';

function App() {
  return (
    <div className="App">
      <h1>Welcome to E-Learning App</h1>
      <LoginPage />
      <HomePage />
      <CourseManagement />
    </div>
  );
}

export default App;
