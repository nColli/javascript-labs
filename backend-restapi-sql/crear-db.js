const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db.sqlite');

db.serialize(() => {
    db.run("CREATE TABLE items (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(255) NOT NULL)");
});

db.close()