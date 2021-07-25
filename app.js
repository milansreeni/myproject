const express = require('express');
const app = express();
app.get('/v1', (req, res) =>
{
    res.send('hello world');
});
app.listen(3000, () => console.log('listening...to the server'));
