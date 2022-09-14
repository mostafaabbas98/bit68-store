import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="sticky top-0 z-10 w-full overflow-hidden h-[88px] bg-black text-white flex justify-between md:justify-evenly items-center px-10 md:px-2">
        <div className="relative w-10 h-16 cursor-pointer">
          <Link href="/">
            <Image src="/asset/Group 729.svg" alt="" layout="fill" priority />
          </Link>
        </div>
        <div className="hidden md:flex items-start space-x-8 lg:space-x-20">
          <div>
            <ul className="flex space-x-4 lg:space-x-6">
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>TV</li>
              <li>Accessories</li>
              <li>Offers</li>
              <span className="border-r border-zinc-500" />
              <li>Support</li>
              <li>Services</li>
              <li>Locations</li>
            </ul>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <Image src="/asset/search.svg" alt="" width={20} height={20} />
              </li>
              <li>
                <Image src="/asset/profile.svg" alt="" width={20} height={20} />
              </li>
              <li>
                <Image src="/asset/bag-2.svg" alt="" width={20} height={20} />
              </li>
            </ul>
          </div>
        </div>
        {/* menu button */}
        <button className="block md:hidden" onClick={() => setMenuOpen(true)}>
          <Image src="/asset/menu.svg" alt="" width={20} height={20} />
        </button>
      </div>
      {/* menu div */}
      {isMenuOpen && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full overflow-hidden bg-black/50  z-20"
            onClick={() => setMenuOpen(false)}
          />
          <div className="w-48 h-full fixed top-0 right-0 bg-black text-white flex flex-col space-y-10 z-30">
            <div>
              <button
                className="absolute top-8 right-4 font-bold text-lg"
                onClick={() => setMenuOpen(false)}
              >
                x
              </button>
              <ul className="flex flex-col justify-center items-center space-y-4 pt-20">
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>TV</li>
                <li>Accessories</li>
                <li>Offers</li>
                <li>Support</li>
                <li>Services</li>
                <li>Locations</li>
              </ul>
            </div>
            <div>
              <ul className="flex justify-center space-x-6">
                <li>
                  <Image
                    src="/asset/search.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </li>
                <li>
                  <Image
                    src="/asset/profile.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </li>
                <li>
                  <Image src="/asset/bag-2.svg" alt="" width={20} height={20} />
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
