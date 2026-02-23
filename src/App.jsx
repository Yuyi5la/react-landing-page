import React, { useEffect } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./Layout/RootLayout.jsx";
import HomePage from "./sections/Home.jsx";
import ContactUs from "./sections/ContactUs.jsx";
import FAQS from "./sections/FAQS.jsx";
import PrivacyPolicy from "./sections/PrivacyPolicy";
import DeleteAccount from "./sections/RequestAccountDeletion.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        {/* Home page with all sections */}
        <Route index element={<HomePage />} />
        {/* Other pages */}
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="faqs" element={<FAQS />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  
        <Route path="/delete-account" element={<DeleteAccount />} />  
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
