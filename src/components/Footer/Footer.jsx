import React from "react";
import { BsShopWindow } from "react-icons/bs";
import Links from "../links/Links";
import { Link } from "react-router-dom";
import Container from "/src/components/container/Container";
import SubscribeForm from "/src/components/SubscribeForm/SubscribeForm";

function Footer() {
  return (
    <div className="bg-[#3B3B3B] h-auto py-2 max-sm:px-4">
      <Container>
        <div className="lg:flex max-md:flex-col max-md:text-left justify-between lg:mx-36 text-[#858584] space font-sans">
          <div>
            <div className="flex items-center gap-3 max-md:text-xs mt-11">
              <BsShopWindow color="#A259FF" size={32} />

              <span className="font-mono text-xl font-bold text-white max-md:text-sm">
                NFT Marketplace
              </span>
            </div>

            <p className="lg:w-60 mt-6">
              NFT marketplace UI created with Anima for Figma.
            </p>

            <p className="mt-5">Join our community</p>
            <div>
              <Links />
            </div>
          </div>

          <div className="mt-11 max-md:mt-6">
            <span className="font-mono text-xl font-bold text-white max-md:text-sm ">
              Explore
            </span>

            <Link to="/Marketplace">
              <p className="mt-6 hover:scale-95 duration-700">Marketplace</p>
            </Link>

            <Link to="/Rankings">
              <p className="mt-4 hover:scale-95 duration-700">Rankings</p>
            </Link>

            <Link to="/Wallet">
              <p className="mt-4 hover:scale-95 duration-700">Connect a wallet</p>
            </Link>
          </div>

          <div className="mt-11 max-md:mt-6">
            <span className="font-mono text-xl font-bold text-white max-md:text-sm">
              Join our weekly digest
            </span>

            <p className="lg:w-56 mt-6  ">
              Get exclusive promotions & updates straight to your inbox.
            </p>

            <SubscribeForm label="Enter your email here"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
