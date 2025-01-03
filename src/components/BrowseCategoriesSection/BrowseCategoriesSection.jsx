import React from "react";
import SectionHeadline from "/src/components/SectionHeadline/SectionHeadline";
import CategoryCard from "/src/components/CategoryCard/CategoryCard";
import Art from "/src/assets/categoryImg/Art.png";
import Collectbles from "/src/assets/categoryImg/Collectbles.png";
import Music from "/src/assets/categoryImg/Music.png";
import Photography from "/src/assets/categoryImg/Photography.png";
import Sport from "/src/assets/categoryImg/Sport.png";
import Utility from "/src/assets/categoryImg/Utility.png";
import Video from "/src/assets/categoryImg/Video.png";
import VirtualWorlds from "/src/assets/categoryImg/VirtualWorlds.png";
import { Link } from "react-router-dom";

function BrowseCategoriesSection() {
  return (
    <div className="lg:mx-36 mt-20 mb-10">
      <SectionHeadline sectionLabel="Browse Categories" />

      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2 gap-11 mt-8">
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
