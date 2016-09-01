import express from 'express';
import colors from 'colors';
import path from 'path'
let app = express();

app.get('/*', (rea, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'.rainbow));
