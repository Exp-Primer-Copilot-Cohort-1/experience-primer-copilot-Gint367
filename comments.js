// Create web server
// 1. import express
const express = require('express');
// 2. create web server object
const app = express();
// 3. set port
const port = 3000;
// 4. set static resources
app.use(express.static('./public'));
// 5. set router
app.get('/getComments', (req, res) => {
    // get query parameters
    const { page, size } = req.query;
    // create data
    const comments = [
        { id: 1, name: 'jack', content: 'I am jack' },
        { id: 2, name: 'mike', content: 'I am mike' },
        { id: 3, name: 'mary', content: 'I am mary' }
    ];
    // return response
    res.send({
        code: 200,
        data: comments.slice((page - 1) * size, page * size),
        total: comments.length
    });
});
// 6. start server listening
app.listen(port, () => console.log(`Server listening on port ${port}`));