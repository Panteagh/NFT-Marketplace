import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Marketplace from "./pages/Marketplace/Marketplace";
import Rankings from "./pages/Ranking/Rankings";
import Wallet from "./pages/Wallet/Wallet";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/login";
import ArtistPage from "./pages/ArtistPage/ArtistPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Marketplace" element={<Marketplace />}></Route>
          <Route path="/Rankings" element={<Rankings />}></Route>
          <Route path="/Wallet" element={<Wallet />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/ArtistPage/:id" element={<ArtistPage />}>
          </Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
