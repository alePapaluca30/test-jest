import Producto from "../components/Product/Product";

async function getData() {
  const res = await fetch("https://dummyjson.com/products?limit=10", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data);

  return (
    <main className="">
      <h1>Lista de Productos</h1>
      <div className="flex flex-col justify-center items-center gap-4">
        {data.products.map((producto: any) => (
          <Producto
            id={producto.id}
            key={producto.id}
            title={producto.title}
            thumbnail={producto.thumbnail}
            description={producto.description}
            price={producto.price}
            discountPercentage={producto.discountPercentage}
          />
        ))}
      </div>
    </main>
  );
}
