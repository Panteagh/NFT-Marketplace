import React from "react";
import Avatar from "/src/components/Avatar/Avatar";
import Button from "/src/components/Button/Button";
import { IoEyeOutline } from "react-icons/io5";
import img from "/src/assets/Avatars/Shroomie.png";
import CountdownTimer from "/src/components/CountdownTimer/CountdownTimer";
import { Link } from "react-router-dom";

function NFTHighlightSection() {
  return (
    <div className="min-w-full h-[640px] bg-custom-bg bg-no-repeat bg-cover relative mb-4 ">
      <div className="absolute top-[222px] left-[184px] md:left-16 max-md:left-16 mx-16 max-md:mx-auto">
        <Link to={`/ArtistPage/${7}`}>
          <div className="rounded-3xl bg-[#3B3B3B] flex gap-2 w-[151px] h-[44px] justify-center items-center hover:scale-95 duration-700">
            <Avatar img={img} />
            <span className="text-white">Shroomie</span>
          </div>
        </Link>

        <div className="flex justify-between items-center md:gap-40 max-md:flex-col">
          <div>
            <h1 className="text-white lg:text-6xl md:text-4xl max-md:text-3xl font-bold mb-9 max-md:mt-5">
              Magic Mashrooms
            </h1>
            <Link to={`/NFTpage/${2}`}>
              <Button
                style="bg-white text-black w-[198px] max-md:w-full"
                icon={<IoEyeOutline color="#A259FF" />}
                label="See NFT"
              />
            </Link>
          </div>
          <div>
            <div className="flex items-center justify-center mt-4">
              <CountdownTimer
                initialHours={59}
                initialMinutes={59}
                initialSeconds={59}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTHighlightSection;
