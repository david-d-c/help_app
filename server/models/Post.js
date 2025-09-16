const knex = require('../db/knex');

class Post {
    constructor(id, title,price){
        this.id = id
        this.title = title
        this.price = this.price
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
        let query = `SELECT * FROM post WHERE user = ?`
        let res = await knex.raw(query, [userId])

        return res.rows
    }

    static async upload(title, price, userId){
        let query = `INSERT INTO post (title, price, user_id) VALUES (?,?,?) RETURNING *`
        let res = await knex.raw(query, [title, price, userId])
        
        return res
    }

    static async editTitle(postId,newTitle){
        let query = `UPDATE post SET title=? WHERE id=? RETURNING *`
        let res = await knex.raw(query, [newTitle, postId])
        
        return res
    }

    static async editPrice(postId, newPrice){
        let query = `UPDATE post SET price=? WHERE id=? RETURNING *`
        let res = await knex.raw(query, [newPrice, postId])
        
        return res
    }

    static async delete(id){
        return knex
    }


}

module.exports = Post