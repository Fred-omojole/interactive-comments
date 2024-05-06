"use client ";
import React, { useRef, useState } from "react";
import { Data, Comment, Reply } from "@/lib/Definition";
import Image from "next/image";
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
    setComment((prev) => [newComment, ...prev]);
    setCommentBody("");
  };

  return (
    <>
      <div className="mt-10 lg:w-1/2 bg-white rounded-md">
        <div className="flex flex-row gap-2 p-6 ">
          <div>
            {" "}
            <label className="">
              <textarea
                value={commentBody}
                onChange={(e) => setCommentBody(e.target.value)}
                placeholder="Add Comment..."
                className="border-[1px] w-80 border-slate-900 p-2 rounded-md   h-24"
              />
            </label>{" "}
          </div>
          <div>
            <button
              onClick={() => handleComment()}
              className=" moderateBlue mt-2 text-white bg border-[1px] rounded-md border-slate-900 px-6 h-10"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        {comment.map((comment, commentIndex) => (
          <div key={commentIndex}>
            <div className=""></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Comments;
