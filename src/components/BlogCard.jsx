import { Panel } from "rsuite";

function BlogCard({ data }) {
  const image = data.blogImage.fields.file.url;
  return (
    <Panel shaded bordered bodyFill>
      <img src={image} className="h-56 w-full object-cover" />
      <Panel header={data.title}>
        <p>
          <small>{data.description}</small>
        </p>
      </Panel>
    </Panel>
  );
}

export default BlogCard;
