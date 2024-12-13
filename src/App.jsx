import { Route, Routes } from "react-router-dom";
import Home from "/src/pages/Home/Home";
import Marketplace from "/src/pages/Marketplace/Marketplace";
import Rankings from "/src/pages/Ranking/Rankings";
import Wallet from "/src/pages/Wallet/Wallet";
import Layout from "/src/components/Layout/Layout";
import Login from "/src/pages/Login/login";
import ArtistPage from "/src/pages/ArtistPage/ArtistPage";
import NFTpage from "/src/pages/NFTpage/NFTpage";
import {NFTMarketContextProvider} from "/src/components/Context/NFTMarketContext";

function App() {
  return (
    
    <NFTMarketContextProvider  >
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Marketplace" element={<Marketplace />} />
          <Route path="/Rankings" element={<Rankings />} />
          <Route path="/Wallet" element={<Wallet />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ArtistPage/:id" element={<ArtistPage />} />
          <Route path="/NFTpage/:id" element={<NFTpage />} />
        </Routes>
      </Layout>
   </NFTMarketContextProvider>

  );
}

export default App;
