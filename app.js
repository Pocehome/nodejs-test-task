const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

app.use(express.static('public'));

app.get('/about', (req, res) => {
    res.send('Ёто простое приложение на Express.js');
});

app.use((req, res) => {
    res.status(404).send('—траница не найдена');
});