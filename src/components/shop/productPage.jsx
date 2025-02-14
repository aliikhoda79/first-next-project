import ImageViewer from "../../components/ImageViewer";
const ProductPage = ({ product }) => {
  console.log(product);
  return (
    <main className="mt-[150px] md:mt-[150px] contains">
      <div className="flex flex-col gap-y-5 shadow-lg shadow-slate-950 rounded-xl px-2 md:px-4 py-3 bg-slate-900">
        <div>route</div>
        <div className=" flex max-md:flex-col gap-5">
          <ImageViewer />
          <div className=" flex flex-col gap-2">
            <h2 className="text-xl ">{product.productName}</h2>
            <p className="px-5 text-[16px] ">category : {product.category}</p>
            <p className="px-5 text-[16px] ">brand : {product.productBrand}</p>
            <p className="px-5 text-[16px] ">colors : {product.productColor}</p>
            <p className="px-5 text-[16px] ">size : {product.productSize}</p>
            <p className="px-5 text-[16px] ">price : {product.price}</p>
            <hr className="w-full bg-white" />
          </div>
        </div>
        <hr className="border-0 bg-slate-600 h-[1px] w-full" />
        <h3 className="">description: <br />{product.description}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nisi animi sunt quasi libero ipsum tenetur enim nobis corrupti nihil sint vel maxime ex ea earum incidunt porro quidem, quos consequuntur ipsa mollitia. Sint ipsam odio illo architecto corporis illum aliquam velit impedit quam, magnam dolorum consectetur et voluptas dolor, voluptatum iure repellat incidunt doloribus sit eius hic similique eos magni minus. Eum autem fuga doloribus quis ea sint quam consequuntur recusandae vero minus iste assumenda maiores quia libero et, omnis necessitatibus aliquid voluptatibus vel debitis ex. Doloremque sapiente, accusantium et nisi hic rerum perferendis, consectetur, autem enim itaque alias aspernatur doloribus. Voluptas blanditiis ratione expedita fugit dicta ex quisquam eligendi facilis impedit amet hic dolor rem et reprehenderit ullam nostrum numquam est, earum possimus officiis, debitis commodi maiores repellendus. Ut eligendi dignissimos libero reprehenderit, eveniet architecto deleniti aperiam ratione quam reiciendis voluptatem voluptates similique quos ea labore dolore tenetur facilis aliquid! Atque consectetur qui nisi dolorem aspernatur nulla, ut est odio dignissimos consequatur modi perferendis adipisci consequuntur nostrum blanditiis dolor totam quisquam commodi distinctio, ipsa deserunt suscipit, officiis repellat. Nostrum pariatur, tenetur ab sed eligendi voluptas deleniti est odio nisi quos laborum ipsam debitis officia aliquid libero officiis.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laudantium minima molestias harum praesentium in neque itaque sequi deleniti voluptate nobis ea, quas iste sapiente ullam architecto! Provident tempora eligendi fugiat culpa praesentium earum explicabo reprehenderit aliquid. Vel optio voluptatum magnam? Ipsa quae quam porro quas aliquid voluptatum nisi nemo eaque, natus maxime libero culpa modi reiciendis in exercitationem numquam blanditiis ab, voluptatem illum enim provident officiis. Laboriosam veritatis assumenda sed! Ipsum animi, debitis libero voluptate blanditiis fugiat necessitatibus pariatur nobis consectetur consequuntur nisi ullam nostrum reprehenderit, quae at amet laboriosam, nulla non assumenda id facilis. Perferendis dignissimos rerum iste veritatis nostrum molestias, ab dolorem cumque rem consequatur ducimus voluptates praesentium amet, temporibus aperiam nam odit facilis eum omnis exercitationem. Aperiam sunt eos ipsum. At, maiores? Distinctio molestias corporis fuga ut, blanditiis, velit harum reiciendis quibusdam quos excepturi asperiores libero perspiciatis. Iusto ullam facilis, dolorem nulla cumque obcaecati id quisquam rerum illo officia ab, ducimus iste aliquid soluta fugit nemo dolores! Voluptatum at amet laudantium ex alias ad distinctio, neque inventore possimus architecto dolore fuga assumenda. Ratione, laudantium nulla. Commodi harum odit nam aspernatur necessitatibus facilis autem corporis iusto maxime facere, ratione nobis et quis a impedit reprehenderit, animi iste.
        </h3>
      </div>
    </main>
  );
};

export default ProductPage;
