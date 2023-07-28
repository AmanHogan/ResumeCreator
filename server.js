const express = require('express');
const app = express();
const PORT_NUMBER = 3000;
const fetch = require('node-fetch');
const multer = require('multer');
const cors = require('cors');

// Set view engine and static public pages
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// Render First Home Page
app.get('/profile', (req, res) =>
{
    res.render('profile');
})

app.get('/WorkExperience', (req, res) => {
    res.render('WorkExperience')
})


app.get('/Skills', (req, res) => {
  // Retrieve the data from the query parameters
  const data = {
    inputName: req.query.inputName || "N/A",
    address1: req.query.address1 || "N/A",
    address2: req.query.address2 || "N/A",
    address3: req.query.address3 || "N/A",
    college: req.query.college || "N/A",
    startYear: req.query.startYear || "N/A",
    endYear: req.query.endYear || "N/A",
    degreeName: req.query.degreeName || "N/A",
    gpa: req.query.gpa || "N/A"
  };

  

  // Render the Skills view template and pass the data to it
  res.render('Skills', data);
});




app.get('/FinalView', (req, res) => {
  res.render('FinalView')
})

app.get('/pythonFile', (req, res) => {
    const flaskUrl = 'http://localhost:3000/pythonFile'; // Flask backend URL
  
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