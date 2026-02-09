import { useState } from "react";
import axios from "axios";
import upload from "../assets/upload.svg";
import toast, { Toaster } from "react-hot-toast";

function UploadBlog() {
  const [filename, setFilename] = useState("No file selected");
  const [filedata, setFiledata] = useState({
    file: null,
    name: "",
    type: "",
    updated_at: "",
    size: 0,
  });
  const handleUpload = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      setFilename(file.name);
      setFiledata({
        file: file,
        name: file.name,
        type: file.type,
        updated_at: file.lastModifiedDate,
        size: file.size,
      });
    }
  };
  const uploadBlog = async () => {
  if (!filedata.file) return;

  try {
    const formData = new FormData();
    formData.append("file", filedata.file);

    const res = axios.post(
      "http://localhost:3000/uploadblog",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    // toast after request finishes
    toast.success("Uploaded Successfully");

  } catch (err) {
    console.log(err);
    toast.error("Error uploading");
  }
};


  return (
    <>
      <Toaster position="top-center" />
      <div className="flex flex-col items-center gap-3">
        <h1 className="m-10 text-4xl">Upload a .md file to upload blog</h1>

        <label
          htmlFor="blogfile"
          className="cursor-pointer text-white px-5 py-2 font-semibold transition w-1/5 rounded-lg hover:-translate-y-1 hover:rotate-2"
        >
          <img src={upload} alt="uploadbutton" className="m-auto" />
        </label>
        <input
          type="file"
          id="blogfile"
          accept=".md"
          className="hidden"
          onChange={handleUpload}
        />

        <p className="text-sm">{filename}</p>
        <button
          onClick={uploadBlog}
          disabled={!filedata.file}
          className="bg-(--primary) w-50 h-10 text-2xl font-bold hover:opacity-80 rounded active:opacity-50"
        >
          Upload
        </button>
      </div>
    </>
  );
}

export default UploadBlog;
