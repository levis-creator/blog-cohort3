import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";
import { client } from "../lib/contentful.config";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    client
      .getEntries({ content_type: "blogs" })
      .then((res) => setBlogs(res.items));
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-center">Blogs</h1>
      <div>
        <SearchBar />
      </div>
      <div className="grid grid-cols-1 gap-6 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {blogs.map((singleBlog, i) => (
          <Link key={i} to={`/blogs/${singleBlog.fields.slug}`}>
            <BlogCard data={singleBlog.fields} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
