"use client ";
import React, { useState } from "react";
import { Data, Comment, Reply } from "@/lib/Definition";
const Comments = () => {
  const [comment, setComment] = useState(Data);
  const [commentBody, setCommentBody] = useState("");

  return (
    <>
      <div className="space-x-2">
        <label>
          <input
            value={commentBody}
            onChange={(e) => setCommentBody(e.target.value)}
            placeholder="Enter Message ..."
            className="border-[1px] border-slate-900 p-1/2 rounded-md p-2"
          />
        </label>

        <button
          // onClick={}
          className="border-[1px] rounded-md border-slate-900 px-1"
        >
          Send
        </button>
      </div>

      <div className=" mt-10">
        {comment.map((root, rootIndex) => (
          <div className="" key={rootIndex}>
            <div className="flex flex-col gap-4">
              {root.comments.map((comment: Comment, commentIndex) => (
                <div className="flex flex-col gap-4" key={commentIndex}>
                  <div className=" border-[1px] border-zinc-500 rounded-md">
                    {comment.content}
                  </div>
                  {comment.replies.map((reply: Reply, replyIndex) => (
                    <div key={replyIndex}>
                      <div className=" border-[1px] border-zinc-500 rounded-md">
                        {reply.content}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Comments;
