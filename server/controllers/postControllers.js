const Post = require('../models/Post')


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

exports.editPostTitle = async (req, res) => {

}

exports.editPostPrice = async (req, res) => {
    
}

