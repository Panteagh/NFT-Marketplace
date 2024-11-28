import React, { useEffect, useState } from "react";
import { getApi, getNftData } from "../../components/services/api";
import { Link, useParams } from "react-router-dom";
import { PiCopy } from "react-icons/pi";
import { BsPlusLg } from "react-icons/bs";
import { useNftMarketPlaceContext } from "../../components/Context/NFTMarketContext";

import Header from "../../assets/images/HeaderCreatorPage.png";
import ArtistState from "../../components/ArtistState/ArtistState";
import Links from "../../components/links/Links";
import Button from "../../components/Button/Button";
import BorderedButton from "../../components/BorderedButton/BorderedButton";
import NFTCard from "../../components/NFTCard/NFTCard";

function ArtistPage() {
  const { CopyArtistLink, followHandler, isFollow, handelScrolling } =
    useNftMarketPlaceContext();

  const { id } = useParams();
  const [creatorData, setCreatorData] = useState([]);
  const [NFTs, setNFTs] = useState([]);

  useEffect(() => {
    getNftData(id).then((res) => {
      setCreatorData(res);
    });

    getApi().then((result) => {
      setNFTs(result);
    });
  }, []);

  handelScrolling();

  return (
    <>
      <div className="relative">

        <img
          className="w-full md:h-[320px max-md:h-[280px] max-sm:h-80"
          src={Header}
        />

        <div className="w-32 h-32 rounded-lg absolute bottom-[-55px] left-28">
          <img src={creatorData.Avatar} />
        </div>

      </div>
      <div className=" lg:mx-32 max-sm:mx-3 mx-8 mt-20">
        <div className="flex justify-between mt-10 max-md:flex-col-reverse max-md:justify-center max-md:items-center">
          <div className="max-md:mt-8">

            <h2 className="text-white text-5xl max-md:text-3xl max-sm:text-2xl font-bold">
              {creatorData.Artistname}
            </h2>

            <div className="mt-10">
              <ArtistState
                Volumevalue="250k+"
                NFTsSoldValue="50+"
                FollowersValue="3000+"
              />
            </div>

            <div className="mt-10">
              <label className="text-[#858584]  font-bold text-2xl max-md:text-lg font-mono">
                Bio
              </label>
              <p className="mt-4 text-white text-lg max-md:text-sm md:max-w-[605px]">
                The internet's friendliest designer kid.
              </p>
            </div>

            <div className="mt-10">
              <label className="text-[#858584]  font-bold text-2xl max-md:text-lg font-mono ">
                Links
              </label>
              <Links />
            </div>

          </div>

          <div className="flex gap-3 ">
            <Button
              style="bg-[#A259FF] md:w-[186px] text-white"
              label="0xc0E3...B79C"
              icon={<PiCopy color="white" />}
              onClick={CopyArtistLink}
            />

            {isFollow ? (
              <BorderedButton
                style="md:w-[145px]"
                icon={<BsPlusLg color="#A259FF" />}
                label="Follow"
                onClick={followHandler}
              />
            ) : (
              <BorderedButton
                style="md:w-[145px] text-white"
                label="Following"
                onClick={followHandler}
              />
            )}

          </div>
        </div>
      </div>
      
      <div className="bg-[#353434] py-10">
        <div className="lg:mx-32 max-sm:mx-3 mx-8 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
          {NFTs.map((item) => (
            <Link key={item.id} to={`/NFTpage/${item.id}`}>
              <NFTCard {...item} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default ArtistPage;
