import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Products = ({ products }) => {
  const [sliderW, setSliderW] = useState(0);

  const sliderRef = useRef();

  const goRight = () => {
    if (sliderW + 508 <= sliderRef.current.clientWidth) {
      sliderRef.current.scroll(sliderW + 508, 0);
    } else {
      sliderRef.current.scroll(sliderRef.current.clientWidth, 0);
    }
  };

  const goLeft = () => {
    if (sliderW - 508 >= 0) {
      sliderRef.current.scrollTo(sliderW - 508, 0);
    } else {
      sliderRef.current.scrollTo(0, 0);
    }
  };

  const onSlide = () => {
    setSliderW(sliderRef.current.scrollLeft);
  };

  return (
    <div className="py-6 flex flex-col items-center">
      <h2 className="text-2xl font-semibold">Explorer Products</h2>
      <div className="w-4/5 h-fit px-auto mt-10 mb-5 rounded-md">
        <div
          ref={sliderRef}
          className="flex justify-center md:justify-start w-full flex-wrap md:flex-nowrap overflow-scroll scrollbar-hide scroll scroll-smooth md:border-r border-zinc-500"
        >
          {products?.map((product) => (
            <div
              key={product.id}
              onScroll={() => onSlide()}
              className="relative flex flex-col justify-center items-center min-w-fit p-4 border sm:border-r border-zinc-500 "
            >
              <Link href={`/product/${product.id}`}>
                <a>
                  <div className="relative w-[120px] md:w-[220px] h-[120px] md:h-[220px] ">
                    <Image
                      src={product.img[0]}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <h3 className="capitalize text-lg font-semibold">
                    {product.name}
                  </h3>
                  <div className="flex justify-between">
                    <p>${product.priceAfterdiscount}</p>
                    <p className="line-through text-zinc-600">
                      ${product.price}
                    </p>
                  </div>
                  {product.inStock > 0 ? (
                    <p className="text-green-500">In Stock</p>
                  ) : (
                    <p className="text-red-500">Out of Stock</p>
                  )}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden sm:block">
        <button
          onClick={goLeft}
          className="w-6 h-6 rounded-full border border-zinc-500"
        >
          <Image
            src="/asset/arrow-right.svg"
            alt="got left"
            width={15}
            height={15}
            className="rotate-180"
          />
        </button>
        <div className="inline-flex space-x-1 mx-2">
          {products.map((product) => (
            <span
              key={product.id}
              className=" w-2 h-2 bg-zinc-400 rounded-full"
            ></span>
          ))}
        </div>
        <button
          onClick={goRight}
          className="w-6 h-6 rounded-full border border-zinc-500"
        >
          <Image
            src="/asset/arrow-right.svg"
            alt="got left"
            width={15}
            height={15}
          />
        </button>
      </div>
    </div>
  );
};

export default Products;
