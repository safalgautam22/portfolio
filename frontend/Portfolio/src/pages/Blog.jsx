import { useParams } from "react-router-dom";
import { Nav } from "../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const Blog = () => {
  const params = useParams();
  const id = params.id;
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await axios.get("http://localhost:3000/blog/" + id);
        console.log(id);
        setBlog(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBlog();
  }, [id]);
  return (
    <>
      <head>
        <title>{blog.title}</title>
      </head>
      <Nav showCV={false} />
      <div className="mt-20 w-4/5 m-auto">
        <h1 className="text-center text-3xl font-bold text-(--primary) mb-10">
          {blog.title}
        </h1>
        <span className="text-gray-500 ">
          Updated at: {new Date(blog.createdAt).toLocaleDateString()}
        </span>
        <div
          className="mt-5 flex flex-col gap-5 text-xl "
          dangerouslySetInnerHTML={{ __html: blog.body }}
        />
      </div>
    </>
  );
};

export const DeleteBlog = () => {
  const params = useParams()
  const id = params.id

  const deleteblog = async () => {
    console.log(id)
    await axios.delete("http://localhost:3000/deleteblog/"+id)
  }
  return (
    <button className="w-1/3 h-1/3 bg-(--primary) text-2xl font-bold rounded m-auto" onClick={deleteblog}>Delete</button>
  )
}
