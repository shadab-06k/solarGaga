import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import { ContactUs } from "./components/ContactForm/ContactUs";
import Guide from "./components/Guide/Guide";
import News from "./components/News/News";
import GagaPortalUser from "./components/GagaPortalUser/GagaPortalUser";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import ScrollToTop from "./components/ScrollToTop"; // Import the ScrollToTop component
import Main from "./components/Main/Main";
import MainData from "./components/Main/MainData/MainData";
import OurShworoom from "./components/OurShowroom/OurShworoom";
import { SolarGagaContext } from "./SolarGagaContext";
import Registry from "./components/Registry/Registry";
import Monitor from "./components/Monitor/Monitor";
import Listing from "./components/Listing/Listing";
import RecTable from "./components/RecTable/RecTable";
import RecTable2 from "./components/RecTable2/RecTable2";
import Checklist from "./components/Checklist/Checklist";

function App() {
  const { jwtToken } = useContext(SolarGagaContext);
  const location = useLocation();

  const shouldRenderNavBarAndFooter =
    location.pathname !== "/signup" && location.pathname !== "/signin";
    console.log('Jwt token presennt in app.jsx',jwtToken)

  return (
    <div>
      <ScrollToTop /> {/* Include the ScrollToTop component here */}
      { shouldRenderNavBarAndFooter && <NavBar />}
      {!jwtToken && shouldRenderNavBarAndFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gagaportal" element={<GagaPortalUser />} />
        <Route path="/company" element={<AboutUs />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/insight" element={<News />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/main" element={<Main />} />
        <Route path="/maindata" element={<MainData />} />
        <Route path="/our-showroom" element={<OurShworoom />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/monitor" element={<Monitor />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/check-list" element={<Checklist />} />
        <Route path="/rec-table" element={<RecTable2 />} />

        
      </Routes>
      {!jwtToken && shouldRenderNavBarAndFooter && <Footer />}
    </div>
  );
}

export default App;
