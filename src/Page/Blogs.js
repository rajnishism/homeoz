import React from "react";
import BlogCard from "../Components/BlogCard";
import Header from "../Components/Header";

const Blogs = () => {
  return (
    <>
      <Header />
      <div className=" pt-10">
        <div className="text-center">
          <p className="text-primary font-medium">Blogs</p>
          <p className="font-bold text-xl">
            {" "}
            know more about Power of Homeopathy
          </p>
        </div>
        <div className=" justify-items-center items-center grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />

          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </>
  );
};

export default Blogs;
