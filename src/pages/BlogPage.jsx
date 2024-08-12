import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import BlogCard from "../components/BlogCard";
import { client } from "../lib/contentful.config";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    client.getEntries().then((res) => console.log(res));
  }, []);
  return (
    <div>
      <h1 className="font-extrabold text-center text-2xl">Blogs</h1>
      <div>
        <SearchBar />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10 ">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}

export default BlogPage;
