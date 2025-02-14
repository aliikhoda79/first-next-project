import { pic1 } from "../utils/index";
import { pic2 } from "../utils/index";
import Image from "next/image";
const Hslider = () => {
  return (
    <main className="flex   bg-white/70 h-screen">
      <div className="w-full  overflow-hidden  h-full">
        <Image
          className="bg-cover hover:scale-105 hover:saturate-50 hover:blur-0 transition-all ease-in-out saturate-0 blur-sm"
          src={pic2}
          alt="pix"
        ></Image>
      </div>
      <div className="w-full overflow-hidden h-full">
        <Image
          className="bg-cover hover:scale-105 hover:saturate-50 hover:blur-0 transition-all ease-in-out saturate-0 blur-sm"
          src={pic1}
          alt="pix"
        ></Image>
      </div>
    </main>
  );
};

export default Hslider;
