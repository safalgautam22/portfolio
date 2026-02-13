import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./pages/Home";
import { Blogs } from "./pages/Blogs";
import { UploadBlog } from "./pages/UploadBlog";
import { Blog, DeleteBlog } from "./pages/Blog";

const ScrollToHash = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [hash]);
  return null
};
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToHash />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/uploadblog" element={<UploadBlog />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/deleteblog/:id" element={<DeleteBlog />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
