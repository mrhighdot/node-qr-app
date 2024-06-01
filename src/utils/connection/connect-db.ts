import mysql from "mysql2";

const db = mysql.createConnection({
	host: "",
	user: "",
	password: "",
	database: "",
});

//Connect to Database

db.connect((err: string) => {
	if (err) {
		console.error("error connceting: ", err);
		return;
	}
	console.log("Connected as id", db.threadId);
});
