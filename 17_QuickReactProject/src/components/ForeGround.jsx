import React from "react";
import Card from "./Card";

export default function ForeGround() {
  const ref = React.useRef(null);
  const data = [
    {
      desc: "The Quick brown fox jumps over the lazy dog. The Quick brown fox jumps over the lazy dog.",
      fileSize: ".3mb",
      close: true,
      tagDetails: {
        isOpen: true,
        tagTitle: "Download",
        tagColor: "bg-green-300",
      },
    },
    {
      desc: "The Quick brown fox jumps over the lazy dog. The Quick brown fox jumps over the lazy dog.",
      fileSize: ".5mb",
      close: false,
      tagDetails: {
        isOpen: true,
        tagTitle: "Download",
        tagColor: "bg-blue-300",
      },
    },
    {
      desc: "The Quick brown fox jumps over the lazy dog. The Quick brown fox jumps over the lazy dog.",
      fileSize: ".7mb",
      close: true,
      tagDetails: {
        isOpen: true,
        tagTitle: "Download",
        tagColor: "bg-yellow-300",
      },
    },
    {
      desc: "The Quick brown fox jumps over the lazy dog. The Quick brown fox jumps over the lazy dog.",
      fileSize: ".9mb",
      close: false,
      tagDetails: {
        isOpen: true,
        tagTitle: "Download",
        tagColor: "bg-red-300",
      },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed w-full h-full z-[3] top-0 flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}
