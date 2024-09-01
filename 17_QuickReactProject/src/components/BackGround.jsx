import React from "react";

export default function BackGround() {
  return (
    <>
      <div className="w-full h-screen fixed z-[2]">
        <div className="absolute py-10 w-full flex justify-center text-zinc-600 text-2xl">
          Documents
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] font-semibold text-zinc-900 text-[13vw] leading-none tracking-tighter">
          Docs.
        </h1>
      </div>
    </>
  );
}
