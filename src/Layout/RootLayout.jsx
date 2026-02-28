import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
     
      <Navbar />

        <ScrollToTop />
      <main className="flex-1">
        <Outlet />
      </main>

      
      <Footer />
    </div>
  );
};

export default RootLayout;
