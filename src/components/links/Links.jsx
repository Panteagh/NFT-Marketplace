import React from "react";
import {
  PiDiscordLogoLight,
  PiInstagramLogoLight,
  PiTwitterLogoLight,
  PiYoutubeLogoLight,
} from "react-icons/pi";

function Links() {
  return (
    <div className="flex">
      <ul className="mb-4 mt-4 list-none space-x-1 ">
        <li className="inline-block text-left">
          <a
            className="relative mb-1 inline-block cursor-pointer select-none overflow-hidden whitespace-nowrap  p-2 text-center align-middle text-xs font-medium leading-5 tracking-wide text-slate-500 transition duration-300 ease-linear hover:text-violet-500 hover:shadow-2xl hover:shadow-violet-600 rounded-full"
            href="#"
          >
            <PiDiscordLogoLight size={32} />
          </a>
        </li>
      </ul>
      <ul className="mb-4 mt-4 list-none space-x-1">
        <li className="inline-block text-left">
          <a
            className="relative mb-1 inline-block cursor-pointer select-none overflow-hidden whitespace-nowrap  p-2 text-center align-middle text-xs font-medium leading-5 tracking-wide text-slate-500 transition duration-300 ease-linear hover:text-red-500 hover:shadow-2xl hover:shadow-red-600 rounded-full"
            href="#"
          >
            <PiYoutubeLogoLight size={32} />
          </a>
        </li>
      </ul>
      <ul className="mb-4 mt-4 list-none space-x-1">
        <li className="inline-block text-left">
          <a
            className="relative mb-1 inline-block cursor-pointer select-none overflow-hidden whitespace-nowrap  p-2 text-center align-middle text-xs font-medium leading-5 tracking-wide text-slate-500 transition duration-300 ease-linear hover:text-blue-400 hover:shadow-2xl hover:shadow-blue-600 rounded-full"
            href="#"
          >
            <PiTwitterLogoLight size={32} />
          </a>
        </li>
      </ul>
      <ul className="mb-4 mt-4 list-none space-x-1">
        <li className="inline-block text-left">
          <a
            className="relative mb-1 inline-block cursor-pointer select-none overflow-hidden whitespace-nowrap  p-2 text-center align-middle text-xs font-medium leading-5 tracking-wide text-slate-500 transition duration-300 ease-linear hover:text-fuchsia-500 hover:shadow-2xl hover:shadow-fuchsia-600 rounded-full"
            href="#"
          >
            <PiInstagramLogoLight size={32} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Links;
