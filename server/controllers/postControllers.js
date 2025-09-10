const Post = require('../models/Post')

//console.log(new Post(1,'post', 'answer'))

exports.viewPost = async (req, res) => {
    
    const { id } = req.params 
    //console.log(typeof id)
    let post = await Post.view(Number(id))
    
    res.send(post)
}

