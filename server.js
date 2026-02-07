const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Start Project - Create inquiry
app.post('/api/projects/create', (req, res) => {
  const { title, description, requirements, budget } = req.body;
  res.json({ 
    success: true,
    id: Date.now(), 
    title, 
    description, 
    requirements,
    budget,
    status: 'pending',
    createdAt: new Date() 
  });
});

// Get all projects
app.get('/api/projects', (req, res) => {
  res.json({ 
    success: true,
    projects: [],
    message: 'No projects yet' 
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`✓ Backend server running at http://localhost:${PORT}`);
  console.log(`✓ Frontend should run at http://localhost:3000`);
});
