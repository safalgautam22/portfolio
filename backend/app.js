import express from "express"
import multer from "multer";
import cors from "cors"

import { contact } from "./controller/contact.js";
import { uploadBlog } from "./controller/blog.js";

const app = express();
const storage = multer.memoryStorage()
const upload = multer({storage})

app.use(cors({
    origin : "http://localhost:5173"
}
))

app.use(express.json())

app.post("/submit", contact);
app.post("/uploadblog",upload.single("file"), uploadBlog);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
