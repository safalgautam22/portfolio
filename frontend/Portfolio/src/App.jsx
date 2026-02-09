import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UploadBlog from "./pages/UploadBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uploadblog" element={<UploadBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App