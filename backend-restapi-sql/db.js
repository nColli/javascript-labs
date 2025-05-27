const sqlite3 = require('sqlite3').verbose();
const database = new sqlite3.Database('db.sqlite');

class Database {    
    constructor() {
        this.db = database;
    }

    async query(sql, params) {
        return new Promise((resolve, reject) => {
            this.db.all(sql, params, (err, rows) => {
                if (err) reject(err);
                //console.log('rows:', rows);
                resolve(rows);
            });
        });
    }

}

db = new Database();

module.exports = db;
