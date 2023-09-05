import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

const BlogEdit = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: "",
  });
  const contentFieldChanaged = (data) => {
    setPost({ ...post, content: data });
  };

  return (
    <div>
      <div className="my-3">
        <label for="content">Post Content</label>
        {/* <Input
                                type="textarea"
                                id="content"
                                placeholder="Enter here"
                                className="rounded-0"
                                style={{ height: '300px' }}
                            /> */}

        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => setContent(newContent)}
        />
      </div>
      <div className="w-full  bg-primary text-white">{content}</div>
    </div>
  );
};

export default BlogEdit;
