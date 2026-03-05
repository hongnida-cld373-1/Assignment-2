// IMPORT Express Server
const e1 = require('express');
const app = e1();
//SEARCH API
app.get('/search', (req, res) => {
    res.send('<html><body>INSIDE SEARCH API..</body></html>');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});