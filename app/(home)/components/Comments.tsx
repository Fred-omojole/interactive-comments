import React, { useRef, useState } from "react";
import { Data, Comment, Reply, CurrentUser } from "@/lib/Definition";
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
      <div className="mt-10 lg:w-2/4 bg-[hsl(228,33%,97%)] rounded-md">
        <div className="flex flex-row gap-4 p-6 mx-auto ">
          <div>
            <Image
              src={Data.currentUser.image.png}
              alt="image"
              width={50}
              height={50}
            />
          </div>

          {/* INPUT AREA FOR CURRENT USER COMMENT  */}
          <div>
            <label className="">
              <textarea
                value={commentBody}
                onChange={(e) => setCommentBody(e.target.value)}
                placeholder="Add Comment..."
                className="border-[1px]  md:w-96 p-2 text-gray-500  bg-[hsl(228,33%,97%)] rounded-md h-24"
              />
            </label>{" "}
          </div>
          {/* SEND BUTTON FOR CURRENT USER COMMENTS */}
          <div>
            <button
              onClick={() => handleComment()}
              className="moderateBlue lg:mt-2 text-white rounded-md border-none px-6 h-10"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        {comment.map((comment, commentIndex) => (
          <div className="my-11 " key={commentIndex}>
            <div className="  w-auto lg:w-1/2 border-[1px]  p-4 h-auto bg-[hsl(228,33%,97%)] rounded-md ">
              <div className=" ">
                <div className="flex items-center gap-3 ">
                  <Image
                    src={comment.user.image.png}
                    alt="image"
                    width={50}
                    height={50}
                  />
                  <h3 className="capitalize">{comment.user.username}</h3>
                  <p className="text-gray-500">{comment.createdAt}</p>

                  <div className="md:relative md:left-72 lg:left-60">
                    <button className="   moderateBlue text-white rounded-md border-none px-6 h-10">
                      Reply
                    </button>
                  </div>
                </div>

                {/* REPLY BUTTON */}
                {/* <div className=" flex  mt-4"> */}

                {/* </div> */}

                <div className="mt-4 text-gray-500 ">{comment.content}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Comments;
