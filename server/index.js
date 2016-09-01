import express from 'express';
import colors from 'colors';

let app = express();

app.get('/*', (rea, res) => {
    res.send('hello world');
});

app.listen(3000, () => console.log('Running on localhost:3000'.rainbow));
