import express from 'express'

// import middleware
import time from '../middleware/bcit.mjs'

// create router
const bcit = express.Router()

// use middleware
bcit.use(time)

// import controller
import getThing from "../controllers/bcit.mjs";

bcit.get('/', getThing);
bcit.get('/about', (req, res) => {
    res.send('About birds')
})

export default bcit;