"use client ";
import React, { useState } from "react";

const Comments = () => {
  const [input, setInput] = useState("");
  return (
    <div className="space-x-2">
      <label>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Message ..."
          className="border-[1px] border-slate-900 p-1/2 rounded-md p-2"
        />
      </label>

      <button className="border-[1px] rounded-md border-slate-900 px-1">
        {" "}
        Send{" "}
      </button>
    </div>
  );
};

export default Comments;
