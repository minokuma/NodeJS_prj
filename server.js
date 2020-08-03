require('dotenv').config()

var express = require("express");                  						
var app = express();                						
const jwt = require('jsonwebtoken')

app.use(express.json())

const posts = [
    {
        username: 'minho',
        title: 'Post 1'
    },
    {
        username: 'chiko',
        title: 'Post 2'
    },
]				

app.get(
        '/posts', authentificateToken, (req, res) => {
        res.json(posts.filter(post => post.username === req.user.name))
    }
)


function authentificateToken (req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) {
        return res.sendStatus(401)
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403)
        }
        req.user = user
        next()
    })
}

app.listen(3000)