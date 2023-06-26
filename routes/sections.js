const express = require('express')
const router = express.Router()


// Defined routes
router.get('/', (req, res) =>{
})

router.get('/Skills', (req, res) =>{
    res.render('Skills')
})

router.get('/WorkExperience', (req, res) =>{
    res.render('WorkExperience')
})

router.get('/FinalView', (req, res) =>{
    res.render('FinalView')
})

module.exports = router