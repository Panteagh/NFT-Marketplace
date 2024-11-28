import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getApi, getNftData } from "../../components/services/api";
import { CiGlobe } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import { useNftMarketPlaceContext } from "../../components/Context/NFTMarketContext";
import Tag from "../../components/Tag/Tag";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";
import Button from "../../components/Button/Button";
import SectionHeadline from "../../components/SectionHeadline/SectionHeadline";
import BorderedButton from "../../components/BorderedButton/BorderedButton";
import NFTCard from "../../components/NFTCard/NFTCard";

function NFTpage() {
  const { handelScrolling } = useNftMarketPlaceContext();
  const { id } = useParams();
  const [NftData, setNftData] = useState({});
  const [Nfts, setNfts] = useState([]);

  useEffect(() => {
    getNftData(id).then((res) => {
      setNftData(res);
    });

    getApi().then((result) => {
      setNfts(result);
    });
  }, [Nfts]);

  handelScrolling();

  const NftCards = useMemo(
    () =>
      Nfts.map((item) => (
        <Link key={item.id} to={`/NFTpage/${item.id}`}>
          <NFTCard key={item.id} {...item} />
        </Link>
      )),
    [Nfts]
  );

  return (
    <>
      <div>
        <img
          className="w-full md:h-[560px] max-md:h-[420px] max-sm:h-80"
          src={NftData.NFTimg}
        />
      </div>

      <div className=" lg:ml-32 max-sm:mx-3 mx-8 mt-10">
        <div className="flex lg:flex-row-reverse max-lg:flex-row-reverse max-sm:flex-col justify-between max-sm:items-center">
          <div className="md:mr-10 ">
            <CountdownTimer
              initialHours={59}
              initialMinutes={59}
              initialSeconds={59}
              button={
                <Button
                  label="Place Bid"
                  style="bg-[#A259FF] w-full h-[60px] mt-5"
                />
              }
            />
          </div>

          <div>
            <div>
              <h2 className="text-white font-bold text-5xl max-md:text-lg">
                {NftData.NFTname}
              </h2>
              <span className="text-[#858584] mt-6 block text-xl max-md:text-sm">
                Minted on Sep 30, 2022
              </span>
            </div>

            <div className="mt-10">
              <label className="text-[#858584]  font-bold text-2xl max-md:text-lg font-mono">
                Created By
              </label>
              <Link to={`/ArtistPage/${id}`}>
                <div className="flex gap-4 items-center mt-4 hover:scale-95 duration-700">
                  <img
                    className="w-6 h-6 rounded-s-full"
                    src={NftData.Avatar}
                  />
                  <h3 className="text-white font-mono text-xl max-md:text-sm ">
                    {NftData.Artistname}
                  </h3>
                </div>
              </Link>
            </div>

            <div className=" mt-10">
              <label className="text-[#858584]  font-bold text-2xl max-md:text-lg font-mono">
                Description
              </label>
              <p className="mt-4 text-white text-lg max-md:text-sm md:max-w-[605px]">
                The Orbitians <br /> is a collection of 10,000 unique NFTs on
                the Ethereum blockchain,
                <br /> <br />
                There are all sorts of beings in the NFT Universe. The most
                advanced and friendly of the bunch are Orbitians. <br /> <br />
                They live in a metal space machines, high up in the sky and only
                have one foot on Earth. These Orbitians are a peaceful race, but
                they have been at war with a group of invaders for many
                generations. The invaders are called Upside-Downs, because of
                their inverted bodies that live on the ground, yet do not know
                any other way to be. Upside-Downs believe that they will be able
                to win this war if they could only get an eye into Orbitian
                territory, so they've taken to make human beings their target.
              </p>
            </div>

            <div className=" mt-10">
              <label className="text-[#858584]  font-bold text-2xl max-md:text-lg font-mono">
                Details
              </label>

              <div className="flex-col mt-4">
                <div className="flex  gap-2 items-center cursor-pointer">
                  <CiGlobe color="#858584" size={24} />
                  <span className="text-white text-xl max-md:text-lg">
                    View on Etherscan
                  </span>
                </div>
                <div className="flex gap-2 items-center mt-2 cursor-pointer">
                  <CiGlobe color="#858584" size={24} />
                  <span className="text-white text-xl max-md:text-lg">
                    View Original
                  </span>
                </div>
              </div>
            </div>

            <div className=" mt-10">
              <label className="text-[#858584]  font-bold text-2xl max-md:text-lg font-mono">
                Tags
              </label>

              <Link to="/Marketplace">
                <div className="flex max-md:flex-col gap-5 mt-4">
                  <Tag label="Animation" />
                  <Tag label="illustration" />
                  <Tag label="moon" />
                  <Tag label="Star" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mt-10">
            <SectionHeadline sectionLabel="More from this artist" />
            <Link to={`/ArtistPage/${id}`}>
              <BorderedButton
                style="w-[267px]"
                label="Go To Artist Page"
                icon={<GoArrowRight color="#A259FF" />}
              />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mx-auto gap-x-6 mt-6">
            {NftCards}
          </div>
        </div>
      </div>
    </>
  );
}

export default NFTpage;
