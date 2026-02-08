import express from "express"
import { contact } from "./controller/contact.js";
import cors from "cors"
const app = express();
app.use(cors({
    origin : "http://localhost:5173"
}
))
app.use(express.json())

app.post("/submit", contact);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
