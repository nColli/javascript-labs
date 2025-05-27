const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db.sqlite');

db.serialize(() => {
    const stmt = db.prepare("INSERT INTO items (nombre) VALUES (?)");
    for (let i = 0; i < 10; i++) {
        stmt.run("item " + i);
    }
    stmt.finalize();

    db.each("SELECT * FROM items", (err, row) => {
        console.log(row.id + ": " + row.nombre);
    });
});

db.close()