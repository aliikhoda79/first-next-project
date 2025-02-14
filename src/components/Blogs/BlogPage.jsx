import Image from "next/image"
import { pic1 } from "../../utils/index";
import { pic2 } from "../../utils/index";
import { pic3 } from "../../utils/index";
import { pic4 } from "../../utils/index";
const BlogPage = ({ blog }) => {
  return (
    <main className=" mt-[100px] contains">
      <div className="flex flex-col gap-y-14 shadow-lg shadow-slate-950  rounded-xl px-2 md:px-4 py-3 bg-slate-900">
      <h1 className="w-full text-center font-extrabold text-4xl ">
        {blog.blogTitle},
        Lorem ipsum dolor sit, 

      </h1>
      <Image src={pic2} alt="ssads" width={200} height={200}></Image>
        <h2 className="">
          <span className="font-bold">
          introduction :
            <br />
          </span>
          consectetur adipisicing elit. Maiores ea laudantium libero necessitatibus. PlaceatQuis repellat quia consequatur odio, dolorum quisquam qui adipisci minima, voluptatem magnam est ducimus rem se
            <Image className="md:w-2/3  bg-red-300 md:h-[400px] h-[300px] object-cover  md:float-left md:mr-4  rounded-2xl my-5" src={pic2} alt="hh" ></Image>
            {blog.blogIntro} Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea laudantium libero necessitatibus. PlaceatQuis repellat quia consequatur odio, dolorum quisquam qui adipisci minima, voluptatem magnam est ducimus rem sed consectetur inciduntciunt dolorum omnis dolore ab dolores eius corrupti atque tempora vel quis eaque, voluptatum nobis expedita excepturi eum. Odio, accusantium! Cupiditate, in. Omnis, qui provident quasi cumque, neque numquam similique reiciendis ad amet dolore maxime reprehenderit doloribus et iusto illo eaque esse harum nobis voluptatibus mollitia fugit quam molestias! Aperiam nisi ipsa quos voluptatum vel quam illum officiis, porro, atque ullam maxime, necessitatibus iusto quia quasi ad adipisci! Maxime delectus corrupti amet adipisci dolores harum culpa pariatur dolor sint nemo. Nam vel fuga cum earum dolorem quaerat maiores iure debitis voluptatibus ad. Doloribus aliquid blanditiis minus porro ullam eaque aspernatur repudiandae alias temporibus officia enim aut, quod molestiae laboriosam a natus dolorem tempore itaque voluptatem fuga animi expedita reprehenderit consectetur obcaecati. Perferendis commodi beatae voluptas dolor consequuntur vel nihil blanditiis aut, magni quod, quisquam laborum laboriosam quasi rerum! Explicabo vel pariatur iusto consequatur aspernatur nostrum maxime fuga repellat minima, reprehenderit suscipit consequuntur perferendis commodi nemo sunt accusantium iure, minus veniam voluptatum nam quasi ut porro. Dolor nobis iste omnis! Aspernatur optio consequatur autem eum veniam, et nostrum fugiat enim sapiente dolor maxime possimus!
        </h2>
         
        {/* <p>{blog.blogImage}</p> */}
        <p>{blog.blogBody}

        
        <Image className="md:w-2/3 w-[200px] h-[150px] bg-red-300 md:h-[400px] object-cover rounded-2xl border ml-3 my-3 border-spacing-[20px] float-right md:ml-5 ring-2 ring-blue-700 ring-offset-red-400" src={pic3} alt="hh" ></Image> 

        
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae amet molestias ullam deserunt in, non hic assumenda possimus corporis, earum iste reiciendis eligendi illum sapiente! Labore praesentium sed veniam enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam inventore cum qui fugiat ab similique veniam dolorum nam est, eum culpa quam vel maiores. Voluptatem aut aspernatur perspiciatis exercitationem, iste veniam temporibus? Ducimus est, dignissimos natus blanditiis molestias, eius eligendi sunt, quisquam molestiae voluptate corporis eaque ab eum nisi mollitia magnam. Ducimus ratione sapiente qui expedita officia dolor dolorem eum non ipsam ipsum, delectus tempore est culpa asperiores cumque alias hic quis, suscipit tenetur aliquid obcaecati adipisci nisi reiciendis veritatis? Ipsum placeat impedit autem odit sit voluptas! Similique quasi accusantium quia sed veritatis ipsa voluptatem numquam maiores, veniam corrupti suscipit.
        
        </p>
        {/* <p>{blog.blogImage2}</p> */}

        <p>conclusion:
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis provident non exercitationem labore, a consequuntur velit quia placeat quos fugiat explicabo ex quae. Maxime veritatis, magni pariatur, animi molestias ratione quia in fugiat ea cupiditate, itaque omnis recusandae aspernatur ipsam molestiae id eius. Esse totam eum nulla odio dignissimos, consequuntur ea quia non maxime a nostrum, laboriosam sed libero facilis minus eveniet, possimus adipisci sunt error beatae quis voluptatem. Blanditiis quam iste mollitia molestiae temporibus eligendi adipisci? Nulla hic eveniet harum id explicabo accusamus, sint exercitationem aliquam et, voluptatum, consequuntur quia similique quibusdam quisquam. Id rem commodi iste eaque corporis.
            <br />{blog.blogConclusion}</p>
        
      </div>

    </main>
  );
};

export default BlogPage;
