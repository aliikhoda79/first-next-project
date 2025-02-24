import Image from "next/image";
import Link from "next/link";
import { pic4 } from "../../utils/index";

const DashboardProducts = ({ products }) => {
  return (
    <div className=" flex flex-col">
      <Link
        className="bg-cyan-600 text-white w-fit rounded-md p-2 "
        href={"/dashboard/products/newProduct"}
      >
        new product
      </Link>
      <div className="grid text-white  md:grid-cols-3 justify-items-center pt-6 max-md:mb-[100px] overflow-y-auto h-[700px] mt-4 gap-8">
        {products.map((p, i) => (
          <Link
            href={`/dashboard/products/${p._id}`}
            className="shadow-lg shadow-slate-900/15 h-[330px] relative hover:scale-105 transition-all ease-linear group md:h-[320px] md:w-[270px] w-[280px] rounded-md overflow-hidden hover:rounded-lg"
            key={i}
          >
            <div className="h-2/3 overflow-hidden">
              <Image
                className=" object-contain  group-hover:blur-0 group-hover:scale-105 transition-all ease-linear blur-sm"
                src={pic4}
                alt="aa"
              />
            </div>
            <div className=" bg-slate-900 flex flex-col group-hover:bg-slate-800/50 p-4 transition-all ease-linear w-full">
              <h2 className="md:text-lg font-semibold">{p.productName}</h2>
              <span
                className="size-3 rounded"
                style={{ backgroundColor: `${p.productColor}` }}
              ></span>
              <p className="text-sm text-zinc-300 line-clamp-2 w-full">
                {p.description}
              </p>
              <p className="text-sm absolute border px-1 py-1 md:px-3 text-zinc-300 left-2 bottom-2 rounded-lg w-fit">
                $ {p.price}{" "}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardProducts;
