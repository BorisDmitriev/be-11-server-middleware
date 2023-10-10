// Your Code goes here
const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const router = express.Router()


// Middleware zum Parsen von JSON-Daten
app.use(express.json())

app.use('/validateUser', checkObject4Values)
app.use('/validateUser', checkAge)
app.use('/sanitizeUser', capitalize)
app.use('/sanitizeUser', sort)
app.use('/sanitizeUser', convert)


//Custom Middleware functions
function checkObject4Values(req,res,next){
    const user = req.body
    if(!user.firstName || !user.lastName || !user.age || !user.fbw || !user.email){
        return res.json( {message: 'Some value is missing.'} )
    }
    next()
}
function checkAge(req,res,next){
    const user = req.body
    if(user.age < 18){
        return res.json( {message: 'We can not validate your user. They are  below 18 years of age.'} )
    }
    next()
} 

function capitalize(req,res,next){
    const user = req.body
    user.firstName = user.firstName[0].toUpperCase() + user.firstName.slice(1)
    user.lastName = user.lastName[0].toUpperCase() + user.lastName.slice(1)
    next()
} 
function sort(req,res,next){
    const user = req.body
    user.favoriteBands.sort()
    next()
} 
function convert(req,res,next){
    const user = req.body
    user.age = parseInt(user.age)
    user.fbw = parseInt(user.fbw)
    next()
} 


// Routes
router.post( '/validateUser', (req, res) => {
    res.json({message: "This user is valid!"})
} )

router.post( '/sanitizeUser', (req, res) => {
    res.json(req.body)
} )


app.use(router);

// Server starten
app.listen(port, () => {
    console.log("Server läuft auf Port", String(port))
})

// Codebuddy-Stuff :)
module.exports = app
