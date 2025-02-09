import db from "../database/database-manager.js"
export function getPostLikes(req, res) {
    const id = req.params.id;
    const likes = db.getPostLikesByPostId(id);
    const senderUsername = req.user.username;
    console.log(senderUsername);
    if (!likes) {
        return res.status(404).json({message: 'No post found'});
    }
    return res.status(200).json({likes,senderUsername});
}
export function likePost(req,res){
    const postId = req.params.id;
    const post = db.getRecipeById(postId);
    console.log("LIKED");
    if (!post){
        return res.status(404).json({message: 'No post found.'});
    }
    db.insertPostLike(req.user.id, postId, new Date().toISOString());
    res.status(201).json({username: req.user.username,like_time: new Date().toISOString()});
}
export function removeLikeOnPost(req,res){
    const postId = req.params.id;
    const post = db.getRecipeById(postId);
    console.log("DISLIKED");
    if (!post){
        return res.status(404).json({message: 'No post found.'});
    }
    console.log(req.user.id,postId);
    db.removeLikeOnPost(req.user.id, postId);
    res.status(200).json({senderUsername: req.user.username});
}