import React from "react";

function Input({label , icon}) {
  return (
    <div>
      <div className="[--clr:#1f1f1f] dark:[--clr:#999999] relative flex flex-row items-center mt-7">
        <input
          value=""
          name={label}
          required=""
          aria-invalid="false"
          placeholder=""
          spellcheck="false"
          autocomplete="off"
          id={label}
          type="text"
          className="peer text-black dark:text-white pl-2 h-[40px] min-h-[40px] pr-[40px] leading-normal appearance-none resize-none box-border text-base w-full text-inherit block text-left border border-solid bg-white rounded-2xl m-0 p-0 outline-0 focus-visible:outline-0 focus-visible:border-purple-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#71717a2e] dark:focus-visible:ring-[#14b8a61a]"
        />
        <label
          className="cursor-text text-[--clr] inline-block z-0 text-sm mb-px font-normal text-start select-none absolute duration-300 transform origin-[0] translate-x-[32px] peer-focus-visible:text-purple-500 peer-focus-visible:translate-x-[8px] peer-[:not(:placeholder-shown)]:translate-x-[8px] peer-focus-visible:translate-y-[-36px] peer-[:not(:placeholder-shown)]:translate-y-[-36px] peer-[:not(:placeholder-shown)]:text-[-36px]"
          for={label}
        >
          {label}
        </label>
        <span className="pointer-events-none absolute z-[+1] left-0 top-0 bottom-0 flex items-center justify-center size-[40px] text-[--clr] peer-focus-visible:hidden peer-[:not(:placeholder-shown)]:hidden">
          {icon}
        </span>
        <div className="group w-[40px] absolute top-0 bottom-0 right-0 flex items-center justify-center text-[--clr] peer-focus-visible:text-purple-500 peer-focus-visible:[&amp;_span]:border-teal-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="1rem"
            stroke-linejoin="round"
            stroke-linecap="round"
            viewBox="0 0 24 24"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
            <path d="M12 8v4"></path>
            <path d="M12 16h.01"></path>
          </svg>
          <span className="text-sm absolute cursor-default select-none rounded-2xl px-1.5 opacity-0 right-0 -z-10 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-[calc(100%+18px)]">
            Required!
          </span>
        </div>
      </div>
    </div>
  );
}

export default Input;
