import express from "express";
import cors from "cors";
const app = express();
//Connect to database
app.use(cors());
app.get("/", (req, res) => {
    res.status(200).json("Hello");
});
const port = 5000;
app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map