import React from "react";
import SectionHeadline from "../SectionHeadline/SectionHeadline";
import CategoryCard from "../CategoryCard/CategoryCard";
import Art from "../../assets/categoryImg/Art.png";
import Collectbles from "../../assets/categoryImg/Collectbles.png";
import Music from "../../assets/categoryImg/Music.png";
import Photography from "../../assets/categoryImg/Photography.png";
import Sport from "../../assets/categoryImg/Sport.png";
import Utility from "../../assets/categoryImg/Utility.png";
import Video from "../../assets/categoryImg/Video.png";
import VirtualWorlds from "../../assets/categoryImg/VirtualWorlds.png";
import { Link } from "react-router-dom";

function BrowseCategoriesSection() {
  return (
    <div className="lg:mx-36 mt-20 mb-10">
      <SectionHeadline sectionLabel="Browse Categories" />

      <div className=" grid lg:grid-cols-4 md:grid-cols-3 max-md:gap-3 sm:grid-cols-2 max-sm:grid-cols-2 gap-5 mt-8">
        <Link to="/Marketplace">
          <CategoryCard img={Art} CategoryName="Art" />
        </Link>

        <Link to="/Marketplace">
          <CategoryCard img={Collectbles} CategoryName="Collectbles" />
        </Link>

        <Link to="/Marketplace">
          <CategoryCard img={Music} CategoryName="Music" />
        </Link>

        <Link to="/Marketplace">
          <CategoryCard img={Photography} CategoryName="Photography" />
        </Link>

        <Link to="/Marketplace">
          <CategoryCard img={Video} CategoryName="Video" />
        </Link>

        <Link to="/Marketplace">
          <CategoryCard img={Utility} CategoryName="Utility" />
        </Link>

        <Link to="/Marketplace">
          <CategoryCard img={Sport} CategoryName="Sport" />
        </Link>

        <Link to="/Marketplace">
          <CategoryCard img={VirtualWorlds} CategoryName="VirtualWorlds" />
        </Link>
        
      </div>
    </div>
  );
}

export default BrowseCategoriesSection;
