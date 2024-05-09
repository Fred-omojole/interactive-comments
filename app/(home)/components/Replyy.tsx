"use client";
import React from "react";
import { FaReply } from "react-icons/fa";
import { useState } from "react";

const Replyy = () => {
  const [reply, setReply] = useState("");

  return (
    <>
      
      <button className=" p-6 blue flex justify-center items-center gap-2">
        <FaReply />
        <span className="">Reply</span>
      </button>
   
    </>
  );
};

export default Replyy;
