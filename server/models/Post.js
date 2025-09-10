const knex = require('../db/knex');

class Post {
    constructor(id, title,solution){
        this.id = id
        this.title = title
        this.solution = solution
    }

    static async view(id){

        let query = `SELECT * FROM post WHERE id = ?`
       
        let res = await knex.raw(query, [id])
        //let post = new Post(res.rows[0])
        return res.rows[0]


        //   const result = await knex.raw(query, [username, passwordHash]);
        
        //     const rawUserData = result.rows[0];
        //     return new User(rawUserData);
    }

    static async upload(title, solution){
        let query = `INSERT INTO post (title, solution) VALUES (?,?) RETURNING *`
        let res = knex.raw(query, [title, solution])
        
        return res
    }

    static async editTitle(id,newTitle){
        let query = `UPDATE post SET title=? WHERE id=? RETURNING *`
        let res = knex.raw(query, [newTitle, id])
        
        return res
    }

    static async delete(id){
        return knex
    }


}

module.exports = Post