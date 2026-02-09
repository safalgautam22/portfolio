const getTitleAndBody = (text) => {
  const lines = text.split("\n");
  const title = lines[0];
  const body = [];

  for (let i = 1; i < lines.length; i++) {
    body.push(lines[i]);
  }

  return { title, body: body.join("\n") };
};

export const uploadBlog = async (req, res) => {
  const data = req.file.buffer;
  console.log(data.file);
  const content = req.file.buffer.toString("utf-8");
  const { title, body } = getTitleAndBody(content);

  console.log("Title: ", title)
};
