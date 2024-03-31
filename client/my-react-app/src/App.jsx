import React from 'react';
import RegistrationForm from './RegistrationForm';
import TaskForm from './TaskForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/tasks" element={<TaskForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
