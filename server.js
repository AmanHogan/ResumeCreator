const express = require('express')
const app = express()


// Set view engine and static public pages
app.use(express.static('public'))
app.set('view engine', 'ejs')

// Render First Home Page
app.get('/', (req, res) =>
{
    res.render('home')
})



// Links router with routes
const userRouter = require('./routes/sections')
app.use('/sections', userRouter)

app.listen(3000)



// res.download(server.js)