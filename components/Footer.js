import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-black text-white py-4">
      <div className="flex space-x-14 md:space-x-32">
        <div className="relative w-10 h-10 md:w-20 md:h-20">
          <Image src="/asset/Group 729.svg" alt="" layout="fill" />
        </div>
        <div className="relative w-10 h-10 md:w-20 md:h-20">
          <Image src="/asset/Group 730.svg" alt="" layout="fill" />
        </div>
        <div className="relative w-10 h-10 md:w-20 md:h-20">
          <Image src="/asset/Group 731.svg" alt="" layout="fill" />
        </div>
        <div className="relative w-10 h-10 md:w-20 md:h-20">
          <Image src="/asset/Group 732.svg" alt="" layout="fill" />
        </div>
      </div>

      <p className="text-xs md:text-sm pt-6">
        Copyright &copy; 2022 - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
