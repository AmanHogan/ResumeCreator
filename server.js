const express = require('express')
const app = express()


// Set view engine and static public pages
app.use(express.static('public'))
app.set('view engine', 'ejs')

// Render First Home Page
app.get('/', (req, res) =>
{
    res.render('Education')
})

// Links router with routes
const userRouter = require('./routes/users')
app.use('/users', userRouter)

app.listen(3000)



// res.download(server.js)