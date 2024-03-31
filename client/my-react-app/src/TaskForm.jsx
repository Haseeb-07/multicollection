import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const TaskForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description }),
      });
      const data = await response.json();
      setMessage(data.message);
      // Clear input fields on successful task creation
      if (response.ok) {
        setName('');
        setDescription('');
      }
    } catch (error) {
      setMessage('Error creating task');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Task</button>
      </form>
      {message && <p>{message}</p>}
      <br />
     <Link to="/">Registration</Link>
    </div>
  );
};

export default TaskForm;