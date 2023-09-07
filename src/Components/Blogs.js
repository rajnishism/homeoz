import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import base from "../url";

const myComponentStyle = {};
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${base}/blogs/`)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
      });
  }, []);

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className=" ">
      <div className="text-center mt-10">
        <p className="text-primary font-medium">Blogs</p>
        <p className="font-bold text-xl"> Get ready for healhy blogs </p>
      </div>
      <div className="flex content-center  overflow-x-auto w-full  xl:pl-0 pb-10">
        {blogs?.map((blog) => (
          <Link to={"/blogs/" + blog._id} onClick={topFunction}>
            <div className="h-80 w-64 m-8 flex rounded shadow-lg bg-white hover:shadow-2xl  bg-primary bg-[url('https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg')] bg-cover bg-center  transition-shadow duration-400 ease-in-out">
              <div className="sbg flex items-end h-80 w-64 rounded  bg-cover bg-center">
                <div className="text-white pb-4 px-4 font-bold">
                  {blog.title}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/blogs">
          <button className="p-4 text-sm boundary bg-primary rounded-sm mt-4 text-white font-bold">
            {" "}
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
