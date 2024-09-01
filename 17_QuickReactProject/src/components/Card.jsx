import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.5}
      className="relative flex-shrink-0 w-52 h-60 rounded-[25px] bg-zinc-900/90 text-white px-5 py-5 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full h-16 left-0">
        <div className="flex items-center justify-between px-5 mb-2">
          <h5>{data.fileSize}</h5>
          <span className="w-5 h-5 bg-zinc-300 rounded-full flex items-center justify-center ">
            {data.close ? (
              <IoCloseCircleSharp size="1.25em" color="#444" />
            ) : (
              <LuDownload size=".8em" color="#000" />
            )}
          </span>
        </div>
        {data.tagDetails.isOpen && (
          <div
            className={`tag w-full h-18 px-5 ${data.tagDetails.tagColor} text-zinc-800 flex items-center justify-center p-1`}
          >
            <h3 className="text-md font-semibold">
              {data.tagDetails.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}
