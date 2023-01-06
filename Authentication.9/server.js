
//BUILDING A WEB SERVER WITH EXPRESS

const express = require('express')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const path = require('path')
const { dirname } = require('path')
const { logger } = require('./middleware/logEvents')
const  errorHandler  = require('./middleware/errorHandler')

const app = express()

const PORT = process.env.PORT || 3500

//custom middleware logger
app.use(logger)

app.use(cors(corsOptions))

// START -- BUILT-IN MIDDLEWARE

//built-in middleware to handle urlencoded data form data
app.use(express.urlencoded({ extended: false }))

//built-in middleware for json
app.use(express.json())

//serve static files
app.use('/',express.static(path.join(__dirname, '/public')))

// END --  BUILT-IN MIDDLEWARE

//Routing
app.use('/', require('./routes/root'))
//API
app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))
app.use('/employees', require('./routes/api/employees'))

app.all('*', (req, res) => {
    //res.status(404).sendFile(path.join(__dirname,'views','404.html')) - use this with app.get
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname,'views','404.html'))
    } else if (req.accepts('json')) {
        res.json({ error: "404 Not Found" })
    } else {
        res.type('txt').send( "404 Not Found" )
    }       
})

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

