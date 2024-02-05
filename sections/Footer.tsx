import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-[#f7fcfd] w-full mt-12">
      <div className="--footer-container w-wrapper py-12 mx-auto flex justify-between">
        <div className="--footer-col-1 flex flex-col gap-2">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={60}
              height={60}
              className="w-8"
            />
            <span className="ml-3 text-xl text-black font-medium">
              Medicine.
            </span>
          </Link>
          <p className="text-subheading">1429 Something Bridge, LA 4281</p>
          <p>Call: (321) 428 321 3902</p>
          <div className="socials flex gap-4">
            <button
              type="button"
              className="p-2 bg-[rgba(0,0,0,0.2)] rounded-full"
            >
              <Image
                src="/twitter.svg"
                alt="logo"
                width={60}
                height={60}
                className="w-4"
              />
            </button>
            <button
              type="button"
              className="p-2 bg-[rgba(0,0,0,0.2)] rounded-full"
            >
              <Image
                src="/facebook.svg"
                alt="logo"
                width={60}
                height={60}
                className="w-4"
              />
            </button>
            <button
              type="button"
              className="p-2 bg-[rgba(0,0,0,0.2)] rounded-full"
            >
              <Image
                src="/linkedin.svg"
                alt="logo"
                width={60}
                height={60}
                className="w-4"
              />
            </button>
          </div>
        </div>
        <div className="footer-col-2 flex flex-col gap-2">
          <h1 className="text-xl font-medium">Explore</h1>
          <Link href="" className="text-subheading text-sm">
            Feature
          </Link>
          <Link href="" className="text-subheading text-sm">
            About us
          </Link>
          <Link href="" className="text-subheading text-sm">
            FAQs
          </Link>
          <Link href="" className="text-subheading text-sm">
            Contact
          </Link>
        </div>
        <div className="footer-col-3 flex flex-col gap-2">
          <h1 className="text-xl font-medium">Legal</h1>
          <Link href="" className="text-subheading text-sm">
            Privacy Policy
          </Link>
          <Link href="" className="text-subheading text-sm">
            Terms of service
          </Link>
          <Link href="" className="text-subheading text-sm">
            Documentation
          </Link>
          <Link href="" className="text-subheading text-sm">
            Help Center
          </Link>
        </div>
        <div className="footer-col-4 flex flex-col gap-2">
          <h1 className="text-xl font-medium">Subscribe</h1>
          <p className="text-subheading text-sm">
            Subscribe to get the latest news from us
          </p>
          <div className="--input-box w-full h-10 relative rounded-full overflow-hidden">
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className="w-full px-4 h-full outline-none border-0 bg-[#e0f7fc]"
            />
            <button
              type="button"
              className="absolute top-0 right-0 px-4 h-full rounded-full bg-[#24bee0] text-white text-sm font-medium"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
