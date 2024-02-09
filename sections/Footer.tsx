import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-[#f7fcfd] w-full mt-12" id="footer">
      <div className=" w-full laptop:py-12 mobile:py-6 flex laptop:justify-around mobile:flex-col tablet:flex-row mobile:gap-[1rem] ">
        <div className="--footer-col-1 flex flex-col gap-2">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <Image
              src="/Final Logo Updated.svg"
              alt="logo"
              width={200}
              height={200}
              className="w-48"
            />
          </Link>
          <p className="text-subheading">
            #27, Silk mill, Gandhi Nagar, Vellore
          </p>
          <p>Call: 9342683675</p>
          {/* <div className="socials flex gap-4">
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
          </div> */}
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
        {/* <div className="footer-col-3 flex flex-col gap-2">
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
        </div> */}
        {/* <div className="footer-col-4 flex flex-col gap-2">
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
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
