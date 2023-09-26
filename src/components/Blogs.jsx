import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  // consume context
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-screen flex justify-center bg-gray-50">
      <div className="max-sm:w-3/4 max-md:w-3/4 w-[640px] mt-5">
        {loading ? (
          <Spinner />
        ) : posts.length == 0 ? (
          <div>No Posts Available</div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="mb-3 p-4 shadow-md bg-white">
              <p className="text-xl font-bold">{post.title}</p>
              <p className="text-slate-500 text-sm">
                By <span className="font-bold">{post.author}</span> on{" "}
                <span className="font-bold">{post.category}</span>
              </p>
              <p className="text-sm font-mono mb-2">Posted on {post.date}</p>
              <p className=" font-sans">{post.content}</p>
              <div className="flex gap-2 mt-3 flex-wrap">
                {post.tags.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="text-sm text-slate-600 underline"
                    >
                      {" "}
                      #{tag}{" "}
                    </span>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blogs;
