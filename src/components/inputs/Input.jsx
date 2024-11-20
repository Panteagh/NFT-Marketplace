import React from "react";

function Input({ label, icon, button, style, placeholder  }) {
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
        
        <div
          className={`group ${style} absolute top-0 bottom-0 right-0 flex items-center justify-center text-[--clr] peer-focus-visible:text-purple-500 peer-focus-visible:[&amp;_span]:border-teal-600`}
        >
          {button}
        </div>
      </div>
    </div>
  );
}

export default Input;
