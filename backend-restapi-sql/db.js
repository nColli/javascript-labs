require('dotenv').config();
const sqlite3 = require('sqlite3').verbose();
const database = new sqlite3.Database(process.env.DB_PATH);

class Database {    
    constructor() {
        this.db = database;
    }

    // MySQL - query == SQLite - all
    async query(sql, params) {
        return new Promise((resolve, reject) => {
            this.db.all(sql, params, (error, rows) => {
                if (error) reject(error);
                resolve(rows);
            });
        });
    }

}

db = new Database();

module.exports = db;
