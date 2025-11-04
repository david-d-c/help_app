const knex = require('../db/knex');

class Post {
    constructor({ id, title, price, userId}){
        this.id = id
        this.title = title
        this.price = price
        this.userId = userId
    }

    static async view(id) {
        let query = `SELECT * FROM post WHERE id = ?`
       
        let res = await knex.raw(query, [id])

        return res.rows[0]
    }

    static async viewAll() {
        let query = `SELECT * FROM post`
        let res = await knex.raw(query)

        return res.rows
    }

    static async viewPostFromUser(userId) {
        let query = `SELECT * FROM post WHERE user_id = ?`
        let res = await knex.raw(query, [userId])

        return res.rows
    }

    static async upload(title, price, userId){
        let query = `INSERT INTO post (title, price, user_id) VALUES (?,?,?) RETURNING *`
        let res = await knex.raw(query, [title, price, userId])
        console.log(res)
        return  res.rows[0] ? new Post(res.rows[0]) : null
    }

    static async editTitle(postId, newTitle = null, newPrice = null){
        let title_query = `UPDATE post SET title=? WHERE id=? RETURNING *`
        let price_query = `UPDATE post SET price=? WHERE id=? RETURNING *`
        let both_query = `UPDATE post SET price=?, title=? WHERE id=? RETURNING *`

        let res
        if(newTitle && newPrice){
            res = await knex.raw(both_query, [newPrice, newTitle, postId])
        }else if(newTitle){
            res = await knex.raw(title_query, [newTitle, postId])
        }else {
            res = await knex.raw(price_query, [newPrice, postId])
        }
        
        const rawUpdatedPost = res.rows[0];
        return rawUpdatedPost ? new Post(rawUpdatedPost) : null;
    }

    static async delete(id){
        let query = `DELETE FROM post WHERE id=?`

        await knex.raw(query, [id])
    }


}

module.exports = Post