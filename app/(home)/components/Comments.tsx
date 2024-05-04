"use client ";
import React, { useState } from "react";
import { Data, Comment, Reply } from "@/lib/Definition";
const Comments = () => {
  const [comment, setComment] = useState(Data);
  return (
    <>
      <div className="space-x-2">
        <label>
          <input
            // value={comment}
            // onChange={(e) => setComment (e.target.value)}
            placeholder="Enter Message ..."
            className="border-[1px] border-slate-900 p-1/2 rounded-md p-2"
          />
        </label>

        <button className="border-[1px] rounded-md border-slate-900 px-1">
          Send
        </button>
      </div>

      <div>
        {Data.map((root, rootIndex) => (
          <div key={rootIndex}>
            <div>
              {root.comments.map((comment: Comment, commentIndex) => (
                <div key={commentIndex}>
                  <div>{comment.content}</div>
                  {comment.replies.map((reply: Reply, replyIndex) => (
                    <div key={replyIndex}>
                      <div>{reply.content}</div>
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
