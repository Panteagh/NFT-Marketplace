import React from "react";

function SectionHeadline({ sectionLabel, description }) {
  return (
    <div>
      <h2 className="font-bold text-white lg:text-4xl md:text-3xl max-md:text-xl font-sans leading-tight">
        {sectionLabel}
      </h2>

      <p className="text-white lg:text-xl max-md:text-lg font-sans mt-4">
        {description}
      </p>
    </div>
  );
}

export default SectionHeadline;
