const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', async (req, res) => {
    const posts = await Post.find()
    res.send(posts)
})

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    })

    try {
        const savedPost = await post.save()
        res.json(savedPost)    
    } catch (error) {
        res.json({ message: error })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch (error) {
        res.json({ message: error })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.id })
        res.json(removedPost)
    } catch (error) {
        res.json({ message: error })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({_id: req.params.id}, { $set: { title: req.body.title } })
        res.send(updatedPost)
    } catch (error) {
        res.send({ message: error })
    }
})

module.exports = router
