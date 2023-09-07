import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Parser } from "html-to-react";
import JoditEditor from "jodit-react";
import base from "../url";
const BlogChange = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    fetch(`${base}/blogs`)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      });
  }, [blogs]);
  useEffect(() => {
    console.log(content);
  }, [content]);

  const updateblogs = () => {};
  const deleteblogs = (event, blogId) => {
    const id = blogId;
    const url = `${base}/blogs/` + id;
    console.log(url);
    fetch(url, { method: "DELETE" }).then(() => console.log("done"));
  };

  const addBlog = () => {
    console.log("add blog function hit");
    setShowModal(false);
    console.log(content);
    const newTitle = document.getElementById("blogTitle").value;
    const newContent = content;
    const newImg = document.getElementById("blogImg").value;

    if (!newTitle) {
      alert("title field is missing ");
    } else if (!newContent) {
      alert("content is empty fill it");
    } else if (!newImg) {
      alert("image is missing ");
    } else {
      const url = `${base}/blogs`;
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();

      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;

      const formattedToday = dd + "/" + mm + "/" + yyyy;
      console.log(formattedToday);

      console.log(url);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newTitle,
          imgLink: newImg,
          content: newContent,
          date: formattedToday,
        }),
      };
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then(console.log("done"));

      window.location.reload(false);
    }
  };
  return (
    <div>
      <div className="px-10 sm:flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/logo.png" className="w-20 inline-block"></img>
          <h2 className="inline text-3xl font-semibold">Homeoz</h2>
        </div>
        <div className="flex items-center ">
          <div className="flex items-center bg-secondary py-2 px-4 mr-2">
            <Link to="/">
              <h2 className="">
                {" "}
                <span className="font-bold text-xl"> &larr;</span> Back to main
                Website
              </h2>
            </Link>
          </div>

          <div className="bg-secondary  p-2 hover:bg-primary hover:text-white">
            Logout
          </div>
        </div>
      </div>
      <div className="w-80 h-10 flex  sm:mx-auto mx-10 my-10 sm:my-0">
        <Link to="../dashboard/contentUpdate">
          <div className="w-28 h-10 bg-secondary  hover:bg-primary mr-2 text-xs justify-center flex items-center">
            {" "}
            <div> Contents Update</div>
          </div>
        </Link>
        <Link to="../dashboard/blogs">
          <div className="w-20 h-10 bg-secondary  hover:bg-primary mr-2 text-xs justify-center flex items-center">
            Blogs
          </div>
        </Link>
        <Link to="../dashboard/appointments">
          <div className="w-28  h-10 bg-secondary hover:bg-primary mr-2 text-xs justify-center flex items-center">
            appointments
          </div>
        </Link>
      </div>
      <div className="  mx-10 text-sm   font-medium ">
        {!showModal ? (
          <>
            <button
              className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 bg-secondary shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Add New Blog
            </button>
          </>
        ) : null}

        {showModal ? (
          <>
            <div className="flex justify-center items-center item-center  overflow-x-hidden overflow-y-auto  inset-0 z-50 top-10  outline-none focus:outline-none">
              <div className="  my-6 sm:w-10/12 w-full flex justify-center">
                <div className="border-0  shadow-lg top-4 px-10 flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="font=semibold">Blog Details</h3>
                    <button
                      className="bg-transparent border-0 text-black float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-red-500 opacity-7 p-4 font-bold text-md block border-2 border-red-500 hover:bg-red-500 hover:text-white py-0 rounded-full">
                        Close X
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form className=" shadow-md rounded-sm px-8 pt-6 pb-8 w-full">
                      <label className="block text-black text-sm font-bold mb-1">
                        Blog Title
                      </label>
                      <input
                        className="shadow appearance-none border rounded-sm w-full py-2 px-1 text-black"
                        id="blogTitle"
                      />
                      <label className="block text-black text-sm font-bold mb-1">
                        Content
                      </label>
                      <JoditEditor
                        ref={editor}
                        value={content}
                        onChange={(newContent) => setContent(newContent)}
                      />
                      <label className="block text-black text-sm font-bold mb-1">
                        Img
                      </label>
                      <input
                        className="shadow appearance-none border rounded-sm w-full py-2 px-1 text-black"
                        id="blogImg"
                      />
                    </form>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="text-white bg-primary active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => addBlog()}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      <div className="mx-10 mt-4  font-bold text-lg ">
        <div className="border-b-2 border-primary my-6 flex justify-between items-center pb-2">
          <div className=" ">Recent Blogs</div>
        </div>
        <div>
          <table className="">
            <tr className="">
              <th className="border p-2">blogs Title </th>
              <th className="border p-2">Update </th>
              <th className="border p-2">Delete </th>
            </tr>

            {blogs.map((blog) => (
              <tr>
                <td className="border p-2 w-full">
                  <div
                    className="	rounded-sm textarea"
                    type="text"
                    id={blogs._id}
                    name=""
                    defaultValue={blog.title}
                  >
                    {blog.title}
                  </div>
                </td>
                <td className="border p-2">
                  <button
                    className="bg-green-600 text-center p-2 text-sm text-white rounded-sm hover:shadow-md"
                    onClick={(e) => updateblogs(e, blogs)}
                  >
                    <button className="" type="submit" value="update">
                      Update
                    </button>
                  </button>{" "}
                </td>
                <td className="border p-2">
                  {" "}
                  <button
                    className="bg-red-600 p-2 text-sm text-white rounded-sm"
                    onClick={(e) => deleteblogs(e, blog._id)}
                    id={blogs._id}
                  >
                    Delete
                  </button>{" "}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogChange;
