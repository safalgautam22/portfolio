import { marked } from "marked";
import { Blogs } from "../Model/blogModel.js";

const getTitleAndBody = (markdown) => {
  const lines = markdown.split("\n");

  // Title (remove leading #)
  const rawTitle = lines[0].replace(/^#+\s*/, "");
  const title = marked.parseInline(rawTitle);

  // Body (everything except first line)
  const bodyMarkdown = lines.slice(1).join("\n");
  const body = marked.parse(bodyMarkdown);

  return { title, body };
};

export const uploadBlog = async (req, res) => {
  const data = req.file.buffer;
  const content = req.file.buffer.toString("utf-8");
  const { title, body } = getTitleAndBody(content);

  try {
    await Blogs.create({
      title,
      body,
    });

    res.status(200).json({
      message: `'${title}' added successfully`,
    });
  } catch (err) {
    res.status(500).send(`Error adding blog '${title}'`);
  }
};

export const fetchBlogs = async (req, res) => {
  const blogs = await Blogs.find();
  res.json(blogs);
};

export const fetchBlog = async (req, res) => {
  const id = req.params.id
  const data = await Blogs.findById(id)
  res.json(data)
};
