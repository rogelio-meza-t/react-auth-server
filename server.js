require('dotenv').config()
const express = require('express')
const path = require('path')
const fs = require('fs')
const https = require('https')
const http = require('http')
const passport = require('passport')
const session = require('express-session')
const cors = require('cors')
const socketio = require('socket.io')
const authRouter = require('./lib/auth.router')
const passportInit = require('./lib/passport.init')
const { SESSION_SECRET, CLIENT_ORIGIN } = require('./config')
const app = express()
let server


const certOptions = {
  key: fs.readFileSync(path.resolve('certs/localhost.key')),
  cert: fs.readFileSync(path.resolve('certs/localhost.cert'))
}
server = https.createServer(certOptions, app)

app.use(express.json())
app.use(passport.initialize())
passportInit()


app.use(cors({
  origin: CLIENT_ORIGIN
}))

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}))

const io = socketio(server)
app.set('io', io)

app.get('/wake-up', (req, res) => res.send('👍'))

app.use('/', authRouter)

server.listen(process.env.PORT || 8080, () => {
  console.log('listening...')
})
