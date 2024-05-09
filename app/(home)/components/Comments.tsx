import React, { useState } from "react";
import { Data, Comment, Reply, CurrentUser } from "@/lib/Definition";
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
    setComment((prev) => [newComment, ...prev]);
    setCommentBody("");
  };

  return (
    <div className="">
     
     <div className="p-3 mt-10 bg-[hsl(228,33%,97%)] rounded-md lg:flex lg:gap-2 lg:w-3/4 lg:p-4">
     <div className=" lg:h-36">
        <Image
        className="lg:hidden mb-4 lg:m-auto"
          src={Data.currentUser.image.png}
          alt="current user "
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
          className="w-full p-6 mb-2 h-full bg-[hsl(228,33%,97%)]"
          placeholder="Add Comments..."
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
        ></textarea>
      </label>

      <div className="p-2 grid place-content-end lg:flex lg:items-start mt-2 mb-4 ">
        <button onClick={()=> {handleComment()}} className="relative capitalize font-semibold text-white rounded-md moderateBlue  px-6 py-2 lg:px-4 lg:py-2   ">
          send
        </button>
      </div>


     </div>

    </div>
  );
};

export default Comments;
