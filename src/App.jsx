import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Marketplace from "./pages/Marketplace/Marketplace";
import Rankings from "./pages/Ranking/Rankings";
import Wallet from "./pages/Wallet/Wallet";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/login";
import ArtistPage from "./pages/ArtistPage/ArtistPage";
// import NFTMarketContext from "./components/Context/NFTMarketContext";

function App() {
  return (
    
    // <NFTMarketContext >
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Marketplace" element={<Marketplace />} />
          <Route path="/Rankings" element={<Rankings />} />
          <Route path="/Wallet" element={<Wallet />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ArtistPage/:id" element={<ArtistPage />} />
        </Routes>
      </Layout>
    // </NFTMarketContext>

  );
}

export default App;
