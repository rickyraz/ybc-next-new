"use client";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  SetStateAction,
  useState,
} from "react";

function ProductFilter({ categories }: { categories: any[] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const handleFilterChange = (category: SetStateAction<string>) => {
    setSelectedCategory(category);
  };

  const filteredProducts = () => {
    if (selectedCategory === "all") {
      return categories.flatMap((category) => category.products);
    } else {
      return (
        categories.find((category) => category.name === selectedCategory)
          ?.products || []
      );
    }
  };

  console.log("categories", categories);

  return (
    <section className="max-w-6xl mx-auto  space-y-4 mb-8">
      <div className="flex justify-center">
        <h2 className="text-xl font-bold text-[#0C1D5A]">PRODUK</h2>
      </div>

      <div className="flex flex-wrap justify-center items-center space-x-3 space-y-1">
        <button
          className={`text-sm px-3 py-1 h-full inline-flex items-center justify-center ${
            selectedCategory === "all"
              ? "border-2 border-blue-brand bg-blue-brand text-white"
              : "border-2 border-blue-brand text-blue-brand"
          } -skew-x-12`}
          onClick={() => handleFilterChange("all")}
        >
          <span className="-skew-x-0 font-bold">SEMUA</span>
        </button>
        {categories &&
          categories.map((category) => (
            <button
              key={category.id}
              className={`text-sm px-3 py-1 h-full inline-flex items-center justify-center ${
                selectedCategory === category.name
                  ? "border-2 border-blue-brand bg-blue-brand text-white"
                  : "border-2 border-blue-brand text-blue-brand"
              } -skew-x-12`}
              onClick={() => handleFilterChange(category.name)}
            >
              <span className="-skew-x-0 font-bold">{category.name}</span>
            </button>
          ))}
      </div>

      <div className="flex md:flex-wrap md:flex-row flex-col mx-4 md:mx-0 md:space-x-3 md:space-y-2">
        {filteredProducts().map(
          (product: {
            variations: { price: any }[];
            id: Key | null | undefined;
            slug: any;
            images: { imageurl: any }[];
            name:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | PromiseLikeOfReactNode
              | null
              | undefined;
          }) => {
            const harga = product.variations[0].price;
            const hargaRupiah = harga.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            });
            return (
              <a key={product.id} href={`/product/${product.slug}`}>
                <div className="from-white to-gray-50 bg-gradient-to-b px-4 pb-4 mt-12 border border-gray-100 rounded-xl relative">
                  <div className="md:px-8 flex justify-center md:mx-0">
                    <img
                      src={product.images[1]?.imageurl || ""}
                      alt={`product-${product.name}`}
                      width={178}
                      height={178}
                      className="-mt-14"
                    />
                  </div>
                  <div className="space-y-2 -mt-3">
                    <p className="text-blue-brand-light text-lg font-bold">
                      {product.name}
                    </p>
                    <div className="bg-blue-brand -skew-x-12 text-sm px-3 py-1 inline-flex">
                      <div className="-skew-x-0 text-white">
                        <span>{hargaRupiah}</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex space-x-2">
                        <img
                          src="/brand/yamaha.png"
                          width={50}
                          height={24}
                          alt="Yamaha logo"
                        />
                        <img
                          src="/brand/bahana.png"
                          width={50}
                          height={24}
                          alt="Bahana logo"
                        />
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 stroke-blue-950/25"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            );
          }
        )}
      </div>
    </section>
  );
}

export default ProductFilter;
