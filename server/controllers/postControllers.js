const Post = require('../models/Post')

exports.createPost = async (req, res) => {
    let { title, price, userId } = req.body
    let newPost = await Post.upload(title, price, userId)

    res.send(newPost)
}

exports.viewPost = async (req, res) => {
    const { id } = req.params 
    
    let post = await Post.view(Number(id))
    
    res.send(post)
}

exports.viewAllPost = async (req, res) => {
    let list = await Post.viewAll()

    res.send(list)
}

exports.viewUserPost = async (req, res) => {
    let { userId } = req.params
    let list = await Post.viewPostFromUser(Number(userId))

    res.send(list)
}

exports.editPost = async (req, res) => {
    let { id } = req.params
    let { newTitle, newPrice } = req.body

    // if(!newTitle) {
    //     res.status(404).send({message: 'No new title to edit to'})
    // }

    let updatedPost = await Post.editTitle(id, newTitle, newPrice)

    res.send(updatedPost)
}


exports.deletePost = async (req, res) => {
    let { id } = req.params

    await Post.delete(Number(id))

    res.send({message: "deleted post"})
}
