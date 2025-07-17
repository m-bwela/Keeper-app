import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3000;

const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'keeper',
    port: 5432,
});
db.connect();

// To Get all notes
app.get('/notes', async(req, res) => {
    const result = await db.query('SELECT * FROM notes');
    res.json(result.rows);
});

// To Add a new note
app.post('/notes', async(req, res) => {
    const { title, content, id} = req.body;
   try {
       await db.query('INSERT INTO notes (title, content, id) VALUES ($1, $2, $3)', [title, content, id]);
       res.status(201).json({ message: 'Note added successfully' });
   } catch (error) {
       console.error('Error adding note:', error);
       res.status(500).json({ error: 'Internal Server Error' });
   }
});

// To Delete a note
app.delete('/notes/:id', async(req, res) => {
    const id = req.params.id;
    try {
        await db.query('DELETE FROM notes WHERE id = $1', [id]);
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting note:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// To Edit a note
app.put('notes/:id', async (req, res) => {
    const id = req.params.id;
    const { title, content } = req.body;
    try {
        await db.query('UPDATE notes SET title = $1, content = $2 WHERE id = $3', [title, content, id]);
        res.status(200).json({ message: 'Note updated successfully' });  
    } catch (error) {
        console.error('Error updating note:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})