// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user');
const Task = require('./models/task'); // Import Task model

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://haseeb123:haseeb123@cluster0.tjjcy8m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// User Registration
app.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = new User({ email, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create Task
app.post('/tasks', async (req, res) => {
    try {
        const { name, description } = req.body;
        const task = new Task({ name, description });
        await task.save();
        res.status(201).json({ message: 'Task created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
