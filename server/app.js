// constant sets
const express = require('express');
const app = express()
const session = require('express-session')
const PORT = process.env.PORT || 9000
const mustacheExpress = require('mustache-express');

// routers
const signUpRouter = require('./routes/signup')
const homeRouter = require('./routes/home')

// global sets
global.bcrypt = require('bcryptjs')
global.models = require('./models')

// app sets
app.use(session({
    secret: 'ljjojh',
    resave: false,
    saveUninitialized: true
}))

app.use(express.static(__dirname + '/public'));
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.render('login')
})

app.use('/signup', signUpRouter)
app.use('/home', homeRouter)

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    models.Users.findOne({ where: { username: username } })

    .then((user) => {
            bcrypt.compare(password, user.password, function(err, result) {
                if (result) {
                    if (req.session) {
                        req.session.userId = user.id
                        res.redirect('http://myownnewsapp.surge.sh')
                    }
                } else {
                    res.render('login', { errorMessage: 'INVALID DETAILS' })
                }
            })
        })
        .catch((error) => {
            res.render('login', { errorMessage: "User not found" })
        })
})


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})