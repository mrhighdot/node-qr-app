import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const user = process.env.DB_USER;
const database = process.env.DB;
const host = process.env.DB_HOST;
const password = process.env.DB_PASSWORD;
const db = mysql.createConnection({
    user: user,
    database: database,
    host: host,
    password: password,
});
//Connect to Database
db.connect((err) => {
    if (err) {
        console.error("error connceting: ", err);
        return;
    }
    console.log("Connected as id", db.threadId);
});
export default db;
//# sourceMappingURL=connect-db.js.map