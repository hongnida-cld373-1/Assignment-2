// IMPORT Express Server
const e1 = require('express');
const app = e1();

// cmt trigger for webhook

// Root API
app.get('/', (req, res) => {
    res.send('<html><body>Welcome!</body></html>');
});

//SEARCH API
app.get('/search', (req, res) => {
    res.send('<html><body>INSIDE SEARCH API..</body></html>');
});

app.get('/view', (req, res) => {
    res.send('<html><body>INSIDE VIEW API..</body></html>');
});

app.post('/login', (req, res) => {
    res.send('<html><body>INSIDE LOGIN API...</body></html>');
});

app.put('/updateprofile', (req, res) => {
    res.send('<html><body>INSIDE UPDATE PROFILE API...</body></html>');
});

app.delete('/delete', (req, res) => {
    res.send('<html><body>INSIDE DELETE API...</body></html>');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
