import React from "react";

function Avatar({ img }) {
  return (
    <div className="w-6 h-6 rounded-s-full">
      <img src={img} />
    </div>
  );
}

export default Avatar;
