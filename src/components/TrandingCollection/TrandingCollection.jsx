import React from "react";
import Collection from "../Collection/Collection";
import SectionHeadline from "../SectionHeadline/SectionHeadline";
import PsychoDog from "../../assets/images/PsychoDog.png";
import CatFromFuture from "../../assets/images/CatFromFuture.png";
import DesignerBear from "../../assets/images/DesignerBear.png";
import MagicMushroom0324 from "../../assets/images/MagicMushroom0324.png";
import MagicMushroom0325 from "../../assets/images/MagicMushroom0325.png";
import DancingRobot0512 from "../../assets/images/DancingRobot0512.png";
import DancingRobot0375 from "../../assets/images/DancingRobot0375.png";
import DancingRobot0356 from "../../assets/images/DancingRobot0356.png";

function TrandingCollection() {
  return (
    <div className="lg:mx-36 mt-20 ">
      <SectionHeadline
        sectionLabel="Trending Collection"
        description="Checkout our weekly updated trending collection."
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 justify-between mx-auto">
        <Collection
          trandNFT={PsychoDog}
          subtrandNFT1={CatFromFuture}
          subtrandNFT2={DesignerBear}
          nameCollection="DSGN Animals"
          Avatar=""
          artis="MrFox"
        />
        <Collection
          display="max-md:hidden"
          trandNFT={MagicMushroom0324}
          subtrandNFT1={MagicMushroom0325}
          subtrandNFT2={MagicMushroom0324}
          nameCollection="Magic Mushrooms"
          Avatar=""
          artis="Shroomie"
        />
        <Collection
          display="max-lg:hidden"
          trandNFT={DancingRobot0512}
          subtrandNFT1={DancingRobot0375}
          subtrandNFT2={DancingRobot0356}
          nameCollection="Disco Machines"
          Avatar=""
          artis="BeKind2Robots"
        />
      </div>
    </div>
  );
}

export default TrandingCollection;
