import React, { useState } from "react";
import { Data, Comment, Reply } from "@/lib/Definition";
import Image from "next/image";

import Replyy from "./Replyy";

const Comments = () => {
  const [comment, setComment] = useState(Data.comments);
  const [commentBody, setCommentBody] = useState("");

  const handleComment = () => {
    const newComment: Comment = {
      id: comment.length + 1,
      content: commentBody,
      createdAt: new Date().toISOString(),
      score: 0,
      user: {
        image: {
          png: Data.currentUser.image.png,
          webp: Data.currentUser.image.webp,
        },
        username: "user",
      },
      replies: [],
    };
    setComment((prev) => [...prev, newComment]);
    setCommentBody("");
  };

  return (
    <div className="">
      {comment.map((comment: Comment, commentIndex) => (
        <div key={commentIndex}>
          <div className="p-3 mt-5 bg-[hsl(228,33%,97%)] rounded-md lg:flex lg:gap-2 lg:w-3/4 lg:p-4">
            <div className="">
              <div className="flex gap-3  items-center mb-4 font-medium">
                <Image
                  src={comment.user.image.png}
                  width={50}
                  alt="user image"
                  height={50}
                  className="lg:hidden mb-4 lg:m-auto items-center"
                />
                <Image
                  src={comment.user.image.png}
                  width={50}
                  alt="user image"
                  height={50}
                  className="hidden lg:block items-center"
                />

                <p className="capitalize ">{comment.user.username}</p>
                <p className="tracking-tighter text-gray-500">
                  {comment.createdAt}
                </p>

                {/* <div className="   "> */}
                <div className="hidden lg:ml-auto lg:grid   lg:place-content-end ">
                  <Replyy />
                </div>
                {/* </div> */}
              </div>

              <p className="p-6  mb-4 text-gray-500">{comment.content}</p>

              <div className="lg:hidden grid place-content-end ">
                <Replyy />
              </div>
            </div>
          </div>

          {comment.replies.map((reply: Reply, replyIndex) => (
            <div key={replyIndex}>
              <div className="p-3 mt-5 bg-[hsl(228,33%,97%)] rounded-md lg:flex lg:gap-2 lg:w-3/4 lg:p-4">
                <div className="">
                  <div className="flex gap-3  items-center mb-4 font-medium">
                    <Image
                      src={reply.user.image.png}
                      width={50}
                      alt="user image"
                      height={50}
                      className="lg:hidden mb-4 lg:m-auto items-center"
                    />
                    <Image
                      src={reply.user.image.png}
                      width={50}
                      alt="user image"
                      height={50}
                      className="hidden lg:block items-center"
                    />

                    <p className="capitalize ">{reply.user.username}</p>
                    <p className="tracking-tighter text-gray-500">
                      {comment.createdAt}
                    </p>

                    {/* <div className="   "> */}
                    <div className="hidden lg:ml-auto lg:grid   lg:place-content-end ">
                      <Replyy />
                    </div>
                    {/* </div> */}
                  </div>

                  <p className="p-6  mb-4 text-gray-500">{reply.content}</p>

                  <div className="lg:hidden grid place-content-end ">
                    <Replyy />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* <div className=" mt-2 border-[2px] border-gray-400 fixed w-full rotate-90 overflow-hidden -z-10"> */}

      {/* </div> */}

      <div className="p-3 mt-5 bg-[hsl(228,33%,97%)] rounded-md lg:flex lg:gap-2 lg:w-3/4 lg:p-4">
        <div className=" lg:h-36">
          <Image
            className="lg:hidden mb-4 lg:m-auto"
            src={Data.currentUser.image.png}
            alt="current user"
            width={50}
            height={50}
          />

          <Image
            className="hidden lg:block"
            src={Data.currentUser.image.png}
            alt="current user "
            width={80}
            height={60}
          />
        </div>

        <label className="w-[1024px] ">
          {" "}
          <textarea
            className="w-full p-6 mb-2 text-gray-500 h-full bg-[hsl(228,33%,97%)]"
            placeholder="Add Comments..."
            value={commentBody}
            onChange={(e) => setCommentBody(e.target.value)}
          ></textarea>
        </label>

        <div className="p-2 grid place-content-end lg:flex lg:items-start mt-2 mb-4 ">
          <button
            onClick={() => {
              handleComment();
            }}
            className="relative capitalize font-semibold text-white rounded-md moderateBlue  px-6 py-2 lg:px-8 lg:py-2 cursor-pointer  "
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
