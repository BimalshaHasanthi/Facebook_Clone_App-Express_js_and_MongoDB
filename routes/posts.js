const express = require('express')
const Post = require('../models/post')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.send("Error" + err)
    }

})

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch (err) {
        res.send("Error" + err)
    }

})


router.get('/user/:userId', async (req, res) => {
    try {
        const post = await Post.find({userId:req.params.userId})
        res.json(post)
    } catch (err) {
        res.send("Error" + err)
    }

})

module.exports = router