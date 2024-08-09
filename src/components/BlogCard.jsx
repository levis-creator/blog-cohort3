import React from "react";
import { Panel } from "rsuite";

function BlogCard() {
  return (
    <Panel shaded bordered bodyFill>
      <img
        src="https://via.placeholder.com/240x180"
        className="h-56 w-full object-cover"
      />
      <Panel header="RSUITE">
        <p>
          <small>
            A suite of React components, sensible UI design, and a friendly
            development experience.
          </small>
        </p>
      </Panel>
    </Panel>
  );
}

export default BlogCard;
