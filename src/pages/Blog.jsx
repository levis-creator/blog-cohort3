import { useEffect, useState } from "react";
import { client } from "../lib/contentful.config";
import { Link, useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ArrowLeft } from "lucide-react";

function Blog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState({});
  const [image, setImage] = useState("");
  const options = {
    preserveWhitespace: true,
  };
  useEffect(() => {
    client
      .getEntries({ content_type: "blogs", "fields.slug": `${slug}` })
      .then((res) => {
        setBlog(res.items[0].fields);
        setImage(res.items[0].fields.blogImage.fields.file.url);
      });
  }, [slug]);
  console.log(blog);
  return (
    <div className=" article">
      <Link to={"/blogs"}>
        <button className="absolute top-24 left-24">
          <ArrowLeft />
        </button>
      </Link>
      <img
        src={image}
        alt="blog image"
        className="object-cover w-full h-80 lg:h-[30em]"
      />
      <div className="mt-8">
        <h2 className="text-2xl font-bold">{blog.title}</h2>
        <div className="article-content">
          {documentToReactComponents(blog.blog, options)}
        </div>
      </div>
    </div>
  );
}

export default Blog;
