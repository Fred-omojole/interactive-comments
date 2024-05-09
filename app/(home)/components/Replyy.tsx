"use client";
import React from "react";
import { FaReply } from "react-icons/fa";
import { useState } from "react";

const Replyy = () => {
  const [reply, setReply] = useState("");

  return (
    <>
      <div className="space-x-4">
        <button className=" flex gap-1 items-center justify-center blue  ">
          <FaReply className="" />
          <span className="font-medium">Reply</span>
        </button>
      </div>
    </>
  );
};

export default Replyy;
