import Image from 'next/image';
import { useState } from 'react';
import Products from '../../components/Products';

const ProductDetails = ({ product, products }) => {
  const [amount, setAmount] = useState(1);
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center gap-8 py-10">
        {/* left */}
        <div className="flex px-4 space-x-4 min-w-[200px] md:min-w-[400px]">
          {/* side small image */}
          <div className="flex flex-col ">
            {product.img.map((pro) => (
              <span key={product.id} className="relative w-20 h-20">
                <Image src={pro} alt="" layout="fill" />
              </span>
            ))}
          </div>

          {/* big image */}
          <div className="relative w-[300px] md:w-[400px] h-[300px] md:h-[400px]">
            <Image src={product.img[0]} alt="" layout="fill" />
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col  min-w-[200px] px-5 md:min-w-[400px] gap-4">
          <div className="flex justify-between">
            <p className="text-gray-500 uppercase">Apple</p>
            <span>
              <Image
                src="/asset/heart.svg"
                alt=""
                width={24}
                height={24}
                className="absolute top-0 right-0"
              />
            </span>
          </div>
          <h2 className="text-lg font-semibold capitalize">{product.name}</h2>
          {/* stars */}
          <div>
            {[...Array(product.numberOfStars)].map((star, idx) => {
              return (
                <span key={idx}>
                  <Image src="/asset/star.svg" alt="" width={20} height={20} />
                </span>
              );
            })}
            {[...Array(5 - product.numberOfStars)].map((star, idx) => {
              return (
                <span key={idx}>
                  <Image
                    src="/asset/star-silver.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </span>
              );
            })}
            <span className="ml-1 text-sm text-gray-500">
              ({product.numberOfReviews} Reviews)
            </span>
          </div>
          <h3 className="text-3xl font-bold text-[#0D4EB7]">
            ${product.priceAfterdiscount}
          </h3>
          {product.inStock > 0 ? (
            <p className="text-green-500 text-xs">In Stock</p>
          ) : (
            <p className="text-red-500 text-xs">Out of Stock</p>
          )}
          {/* btns */}
          <div className="flex items-center space-x-4">
            <button
              className="w-7 h-7 border border-zinc-500 rounded-full flex items-center justify-center font-bold"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
            <span>{amount}</span>
            <button
              className="w-7 h-7 border border-zinc-500 rounded-full flex items-center justify-center font-bold text-xl"
              onClick={() => amount > 1 && setAmount((prev) => prev - 1)}
            >
              -
            </button>
          </div>
          {/* card */}
          <div className="flex gap-2">
            <span className="w-28 h-16 flex items-center justify-center border border-zinc-500 rounded-md text-gray-500 cursor-pointer">
              Full Price
            </span>
            <span className="w-28 h-16 flex items-center justify-center border border-zinc-500 rounded-md cursor-pointer">
              Installments
            </span>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-2">
            <span className="w-28 h-16 flex items-center justify-center border border-zinc-500 rounded-md text-gray-500 cursor-pointer">
              <span className="relative w-20 h-10">
                <Image src="/asset/CIB_Logo.png" alt="" layout="fill" />
              </span>
            </span>
            <span className="w-28 h-16 flex items-center justify-center border border-zinc-500 rounded-md text-gray-500 cursor-pointer">
              <span className="relative w-20 h-10">
                <Image src="/asset/CIB_Logo.png" alt="" layout="fill" />
              </span>
            </span>
            <span className="w-28 h-16 flex items-center justify-center border border-zinc-500 rounded-md text-gray-500 cursor-pointer">
              <span className="relative w-20 h-10">
                <Image src="/asset/CIB_Logo.png" alt="" layout="fill" />
              </span>
            </span>
            <span className="w-28 h-16 flex items-center justify-center border border-zinc-500 rounded-md text-gray-500 cursor-pointer">
              <span className="relative w-20 h-10">
                <Image src="/asset/CIB_Logo.png" alt="" layout="fill" />
              </span>
            </span>
          </div>
          <p className="text-sm font-medium">Memory</p>
          <div className="flex flex-wrap md:flex-nowrap gap-2 -mt-4">
            <span className="w-28 h-16 flex flex-col items-center justify-center border border-zinc-500 rounded-md font-semibold cursor-pointer">
              <p>128GB</p>
              <p>$999.00</p>
            </span>
            <span className="w-28 h-16 flex flex-col items-center justify-center border border-zinc-500 rounded-md font-semibold text-gray-500 cursor-pointer">
              <p>256GB</p>
              <p>$999.00</p>
            </span>
            <span className="w-28 h-16 flex flex-col items-center justify-center border border-zinc-500 rounded-md font-semibold text-gray-500 cursor-pointer">
              <p>512GB</p>
              <p>$999.00</p>
            </span>
            <span className="w-28 h-16 flex flex-col items-center justify-center border border-zinc-500 rounded-md font-semibold text-gray-500 cursor-pointer">
              <p>1TB</p>
              <p>$999.00</p>
            </span>
          </div>

          <p className="text-sm font-medium">Color</p>
          <div className="flex gap-2 -mt-4">
            <span className="w-28 h-16 flex flex-col items-center justify-center border border-zinc-500 rounded-md text-sm cursor-pointer">
              <p>Silver</p>
              <span className="bg-[#EDEDED] w-6 h-6 rounded-full"></span>
            </span>
            <span className="w-28 h-16 flex flex-col items-center justify-center border border-zinc-500 rounded-md text-sm cursor-pointer">
              <p>Sierra Blue</p>
              <span className="bg-[#90BAD1] w-6 h-6 rounded-full"></span>
            </span>
          </div>

          <p className="text-sm font-medium">Insurance</p>
          <div className="flex gap-2 -mt-4">
            <span className="w-28 h-16 flex flex-col items-center justify-center border border-zinc-500 rounded-md font-semibold cursor-pointer">
              <p>1 year</p>
              <p>$99.00</p>
            </span>
            <span className="w-28 h-16 flex flex-col items-center justify-center border border-zinc-500 rounded-md font-semibold cursor-pointer">
              <p>2 year</p>
              <p>$159.00</p>
            </span>
          </div>

          <button className="w-full bg-[#0D4EB7] text-white rounded-md p-1 mt-4">
            Add to cart
          </button>
          <hr className="border-t border-[#6F6F6F] " />
          <p className="flex items-center space-x-2 text-zinc-500 text-sm">
            <Image src="/asset/van.svg" alt="" width={20} height={20} />
            <span>Free shipping, arrives by Tue, Nov 23</span>
          </p>
          <p className="flex items-center space-x-2 text-zinc-500 text-sm">
            <Image src="/asset/convert.svg" alt="" width={20} height={20} />
            <span>Free 10-day return window starts Dec 26th Details</span>
          </p>
        </div>
      </div>
      <Products products={products} />
    </>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const res = await fetch(
    'https://63189f2cf6b281877c71eab0.mockapi.io/products'
  );
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { productid: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://63189f2cf6b281877c71eab0.mockapi.io/products/${params.productid}`
  );
  const product = await res.json();
  const productsRes = await fetch(
    'https://63189f2cf6b281877c71eab0.mockapi.io/products'
  );
  const products = await productsRes.json();
  return {
    props: { product, products },
  };
}
