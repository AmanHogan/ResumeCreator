const express = require('express');
const app = express();
const PORT_NUMBER = 3000;
const fetch = require('node-fetch');
const multer = require('multer');


// Set view engine and static public pages
app.use(express.static('public'))
app.set('view engine', 'ejs');






// Render First Home Page
app.get('/', (req, res) =>
{
    res.render('home')
})


app.get('/Skills', (req, res) => {
    res.render('Skills')
})

app.get('/WorkExperience', (req, res) => {
    res.render('WorkExperience')
})

app.get('/FinalView', (req, res) => {
    res.render('FinalView')
})

app.post('/', (req, res) => {
    res.send('Create User')
})

app.get('/pythonFile', (req, res) => {
    const flaskUrl = 'http://localhost:5000/pythonFile'; // Flask backend URL
  
    fetch(flaskUrl)
      .then(response => response.json())
      .then(data => 
        {
        res.json(data);
      })
      .catch(error => {
        console.error('Error fetching data from Flask backend:', error);
        res.status(500).json({ error: 'An error occurred' });
      });
  });



app.listen(PORT_NUMBER)



// res.download(server.js)