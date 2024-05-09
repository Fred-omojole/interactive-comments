"use client";
import React from "react";
import { FaReply } from "react-icons/fa";
import { useState } from "react";

const Replyy = () => {
  const [reply, setReply] = useState("");

  return (
    <>
      
      <button className="flex gap-1 items-center justify-center blue ">
        <FaReply className="" />
        <span className="grid">Reply</span>
      </button>
   
    </>
  );
};

export default Replyy;
