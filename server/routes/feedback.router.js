const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// STRETCH GOAL - will need to show all DB info 
// ordered by date (newest entries at top of table)
// Can see the database table at:
    // localhost:5000/feedback/admin
router.get('/admin', (req, res) => {
    const sqlText = `
        SELECT * FROM feedback
            ORDER BY date DESC;
    `;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('GET /admin fail:', error);
            res.sendStatus(500);
        })
})

// BASE MODE: need final object from review page entered
// to the DB "feedback" table
router.post('/review', (req, res) => {
    const sqlText = `
        INSERT INTO feedback
            (feeling, understanding, support, comments)
            VALUES
            ($1, $2, $3, $4)
    `;

    const sqlValues = [
        req.body.feeling, 
        req.body.understanding, 
        req.body.support, 
        req.body.comments
    ]

    pool.query(sqlText, sqlValues)
        .then((result) => {
            res.sendStatus(201);
            console.log('Thanks for submitting your feedback!');
        })
        .catch((error) => {
            console.log('POST /review fail:', error);
            res.sendStatus(500);
        })
})

module.exports = router;