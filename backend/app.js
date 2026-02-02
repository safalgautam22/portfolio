import express from "express"
import { contact } from "./controllers/contact.js";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.post("/submit", contact);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
