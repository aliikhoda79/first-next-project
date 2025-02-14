import Image from "next/image";
import { pic1 } from "../utils/index";
import { pic2 } from "../utils/index";
import { pic3 } from "../utils/index";
import { pic4 } from "../utils/index";

import React from "react";

const ImageViewer = () => {
  return (
    <div className="md:w-1/2  grid justify-items-center grid-cols-3  md:gap-2 min-h-[250px]">
      <div className="border bg-black size-[150px] md:size-[250px] col-span-3 ">
        <Image className="object-cover w-full h-full" alt="dd" src={pic3}></Image>
      </div>
      <div className="border md:size-[100px] size-[70px] ">
        <Image className="object-cover w-full h-full" alt="dd" src={pic2}></Image>
      </div>
      <div className="border md:size-[100px] size-[70px] ">
        <Image className="object-cover w-full h-full " alt="dd" src={pic1}></Image>
      </div>
      <div className="border md:size-[100px] size-[70px] ">
        <Image className=" object-cover w-full h-full" alt="dd" src={pic4}></Image>
      </div>
    </div>
  );
};

export default ImageViewer;
