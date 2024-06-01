import express from "express"
import cors from "cors"
import bcrypt from "bcrypt"
import * as dotenv from "dotenv"

const app = express()

app.use(cors())


app.get("/", (req, res) => {
	res.status(200).json("Hello")
})

const port = 5000

app.listen(port, () => {
	console.log(`Listening on port http://localhost:${port}`)
})
