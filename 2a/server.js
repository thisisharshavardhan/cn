const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = { title: 'Home Page', message: 'Welcome to EJS Example!' };
    res.render('sample', data); 
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
