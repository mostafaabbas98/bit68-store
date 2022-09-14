import Hero from '../components/Hero';
import Products from '../components/Products';

export default function Home({ sliders, products }) {
  return (
    <div className="w-full ">
      <Hero sliders={sliders} />
      <Products products={products} />
      <div className="h-[200px] md:h-[280px] bg-zinc-200 flex flex-col justify-center items-center space-y-4">
        <h4 className="text-base md:text-lg font-medium">
          Subscribe our newsletter to be notified when it&apos;ll live
        </h4>
        <div className="">
          <input
            type="text"
            placeholder="Email address"
            className="outline-none bg-inherit border border-zinc-700 border-r-0 rounded-md py-1 px-2 w-60 md:w-80 placeholder:text-black"
          />
          <button className="bg-black text-white py-[5px] px-2 w-24 md:w-32 rounded-md -ml-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const slidersRes = await fetch(
    'https://63189f2cf6b281877c71eab0.mockapi.io/slider'
  );
  const sliders = await slidersRes.json();
  const productsRes = await fetch(
    'https://63189f2cf6b281877c71eab0.mockapi.io/products'
  );
  const products = await productsRes.json();

  return {
    props: { sliders, products }, // will be passed to the page component as props
  };
}
