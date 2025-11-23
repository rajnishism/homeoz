import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Parser } from "html-to-react";
import base from "../url";
import AdSenseAd from "./AdSenseAd";
import Header from "./Header";
const BlogSingle = (props) => {
  const { id } = useParams();
  console.log(id);
  const [blog, setBlog] = useState({});
  useEffect(() => {
    const url = `${base}/blogs/` + id;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((blogDetail) => {
        console.log(blogDetail);
        setBlog(blogDetail);
      });
  }, []);
  const parsed= Parser().parse(blog.content);
  console.log(blog);

  const addComment = (event, blogId) => {
    const name = document.getElementById("newName").value;
    const email = document.getElementById("newEmail").value;
    const comment = document.getElementById("newComment").value;
    
    const newComment = {
      name: name,
      email: email,
      comment: comment,
    };
    console.log(newComment);
    if (name && email && comment) {
      const id = blogId;
      console.log(id);
      const url = `${base}/blogs/` + id + "/comments";
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      };
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then(console.log("done"));
    } else {
      alert("fill all details properly");
      window.location.reload(true);
    }
  };

  return (
    <>
      <Header />
      <div className="  bg-gray-200">
        <div className=" flex flex-col lg:flex-row md:p-10 ">
          <div className="w-full lg:w-2/3   mr-10 mb-10 lg:mb-0 ">
            <div className="bg-white">
              <img src= {parsed?.imgLink || "/images/demo.jpg" } className="w-full "></img>
              <div className="flex w-full justify-between">
                <div className="time px-10 pt-6"> {blog.date}</div>

                <div className="time px-10 pt-6"> share</div>
              </div>
              <h1 className="p-10 text-4xl font-black">{blog.title}</h1>
              <div className="px-10  ">{Parser().parse(blog.content)}</div>

              <div className=" flex justify-between p-10">
                <div>
                  {" "}
                  <button className="p-4 text-sm boundary bg-primary rounded-sm  text-white font-bold">
                    {" <-"}
                    prev
                  </button>
                </div>
                <div>
                  <button className="p-4 text-sm boundary bg-primary rounded-sm  text-white font-bold">
                    {" "}
                    next{"->"}
                  </button>{" "}
                </div>
              </div>
            </div>

            <div className="bg-white    divide-primary  mt-10 pb-2">
              <div>
                <h1 className="p-10 py-5  text-2xl font-semibold border-b-4 border-primary">
                  {blog.comments && blog.comments.length} COMMENT
                </h1>
              </div>
              {blog &&
                blog.comments?.map((cmnt) => (
                  <div className=" ">
                    <div className="flex  px-10 py-4  ">
                      <img
                        className="w-10 h-10 mr-10"
                        src="/images/man.png"
                      ></img>
                      <div className="">
                        <p className=" text-xs">{cmnt.name}</p>
                        <div className=" text-start">{cmnt.comment}</div>
                      </div>
                    </div>
                    <hr className="divide-gray-200"></hr>
                  </div>
                ))}
            </div>

            <div className="bg-white    divide-primary  mt-10">
              <div>
                <h1 className="p-10 py-5  text-2xl font-semibold border-b-4 border-primary">
                  LEAVE A COMMENTS
                </h1>
              </div>
              <div className=" ">
                <form>
                  <div className="flex md:flex-row flex-col p-10 justify-between">
                    <div className=" md:w-1/2  w-full">
                      <h1 className="font-semibold">Name</h1> <br></br>
                      <input
                        type="text"
                        className="border-2 p-2 border-gray-400 focus:border-primary md:w-full w-full rounded-sm "
                        id="newName"
                      ></input>
                    </div>
                    <div className=" md:w-1/2  ml-4 w-full">
                      <h1 className="font-semibold">email</h1> <br></br>
                      <input
                        type="text"
                        className="border-2 p-2  border-gray-400 focus:border-primary w-full rounded-sm"
                        id="newEmail"
                      ></input>
                    </div>
                  </div>
                  <div className="flex flex-col p-10 pt-0">
                    <h1 className="mb-4 font-semibold ">Message</h1>
                    <textarea
                      id="newComment"
                      name="w3review"
                      rows="4"
                      cols="50"
                      className="w-full border-2 p-2 border-gray-400 focus:border-primary rounded-sm"
                    >
                      At w3schools.com you will learn how to make a website.
                      They offer free tutorials in all web development
                      technologies.
                    </textarea>
                  </div>
                  <div className="p-10 pt-0">
                    <button
                      className="p-4 text-sm boundary bg-primary rounded-sm mt-4 text-white font-bold"
                      onClick={(e) => addComment(e, blog._id)}
                    >
                      {" "}
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3   w-full ">
            <div className="bg-white h-96 mb-10 rounded-sm">
              <div className="   divide-primary  border-b-4 border-primary">
                <h1 className="p-10 py-6  text-2xl font-semibold   divide-primary">
                  Advertisement
                </h1>
                <AdSenseAd />
              </div>
            </div>
            <div className="bg-white  mb-10 rounded-sm">
              <div className="  divide-primary  border-b-4 border-primary mb-2">
                <h1 className="p-10 py-6  text-2xl font-semibold   divide-primary">
                  RECENT POSTS
                </h1>
              </div>
              <div className=" flex mb-6">
                <div className="img w-36  mr-2 ">
                  <img src="/images/demo.jpg"></img>
                </div>
                <div className="txt mr-4">
                  Homeopathy for Children: Gentle Healing for Growing Bodies
                </div>
              </div>
              <div className=" flex mb-6">
                <div className="img w-36  mr-2 ">
                  <img src="/images/demo.jpg"></img>
                </div>
                <div className="txt mr-4">
                  Homeopathy for Children: Gentle Healing for Growing Bodies
                </div>
              </div>
              <div className=" flex mb-6">
                <div className="img w-36  mr-2 ">
                  <img src="/images/demo.jpg"></img>
                </div>
                <div className="txt mr-4">
                  Homeopathy for Children: Gentle Healing for Growing Bodies
                </div>
              </div>
              <div className=" flex mb-6">
                <div className="img w-36  mr-2 ">
                  <img src="/images/demo.jpg"></img>
                </div>
                <div className="txt mr-4">
                  Homeopathy for Children: Gentle Healing for Growing Bodies
                </div>
              </div>
            </div>
            <div className="bg-white  mb-10 pb-4 ">
              <div className=" mb-4  divide-primary  border-b-4 border-primary">
                <h1 className="p-10 py-6  text-2xl font-semibold   divide-primary">
                  TAGS
                </h1>
              </div>

              <div className="flex flex-wrap">
                <div className="inline rounded-sm bg-gray-200 p-2 m-4">
                  Homeopathic
                </div>
                <div className="inline rounded-sm bg-gray-200 p-2 m-4">
                  Homeopathic
                </div>
                <div className="inline rounded-sm bg-gray-200 p-2 m-4">
                  Homeopathic
                </div>
                <div className="inline rounded-sm bg-gray-200 p-2 m-4">
                  Homeopathic
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSingle;
