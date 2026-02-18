require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./db/index');
const app = express();

app.use(cors());
app.use(express.json());

// GET all users
app.get('/api/users', async(req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users ORDER BY id');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// PUT update username
app.put('/api/users/:id', async(req, res) => {
    const { id } = req.params;
    const { username } = req.body;
    try {
        const result = await pool.query(
            'UPDATE users SET username = $1 WHERE id = $2 RETURNING *', [username, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update username' });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});