"use client";

import NavBar from "./navbar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="mx-auto w-full md:w-[80%] pl-6 flex items-center justify-between py-4">
        <a href="/" className="z-50 flex items-center">
          <img
            src="https://framerusercontent.com/images/qupX9Wo64wAOHY9aGIlwZ1Zp5kU.png"
            alt="NUSSU Logo"
            width={126}
            height={34.8}
          />
        </a>

        <div className="flex items-center">
          <div className="mr-2 flex items-center">
            <NavBar />
          </div>
          <a
            href="https://linktr.ee/myNUSSU"
            target="_blank"
            rel="noopener noreferrer"
            className="items-center space-x-2 rounded-[50px] bg-[#1A3D90] text-white py-3 px-8 z-50 md:block hidden"
          >
            <span>Linktree</span>
          </a>
        </div>
      </div>
    </header>
  );
}
