import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import MinimalLayout from "./layouts/MinimalLayout";

// Pages
import AboutUs from "./pages/AboutUs";
import Certifications from "./pages/Certifications";
import Product from "./pages/Products";
import Investors from "./pages/Investors";
import Events from "./pages/NewsEvents";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import AdminLogin from "./pages/AdminLogin";

// Components (Home Page Sections)
import HeroCarousel from "./components/HeroCarousel";
import GlobalExpansion from "./components/GlobalExpansion";
import ProductRange from "./components/ProductRange";
import StatsSection from "./components/StatsSection";
import PowerCables from "./components/PowerCables";
import PipeCoating from "./components/PipeCoating";
import ProductSection from "./components/ProductSection";
import QualityControl from "./components/QualityControl";
import ClientsSection from "./components/ClientsSection";
import NewsSection from "./components/NewsSection";
import GlobalPresence from "./components/GlobalPresence";

// Admin
import PrivateRoute from "./components/PrivateRoute";
import AdminDashboard from "./admin/pages/Dashboard"; // corrected if needed
import Products from "./admin/pages/Products";
import News from "./admin/pages/News"; // assuming you have this
import HeroCarouselAdmin from "./admin/pages/HeroCarousel";
import GlobalExpansionAdmin from "./admin/pages/GlobalExpansion";
import Stats from "./admin/pages/Stats";
import PowerCablesAdmin from "./admin/pages/PowerCables";
import AdminPipeCoating from "./admin/pages/PipeCoating";
import AdminProductSection from "./admin/pages/AdminProductSection";
import AdminQualityControl from "./admin/pages/QualityControl";
import AdminClients from "./admin/pages/AdminClients";
import NewsSectionAdmin from "./admin/pages/NewsSectionAdmin";
import AdminLayout from "./admin/layout/AdminLayout";

// Home Page Combined Component
const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <GlobalExpansion />
      <ProductRange />
      <StatsSection />
      <PowerCables />
      <PipeCoating />
      <ProductSection />
      <QualityControl />
      <ClientsSection />
      <NewsSection />
      <GlobalPresence />
    </>
  );
};

const App = () => {
  return (
    <Router basename="/bls-polymers">
      <Routes>
        {/* Main Website Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/certificate" element={<Certifications />} />
          <Route path="/products" element={<Product />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Route>

        {/* Admin Login Without Header/Footer */}
        <Route element={<MinimalLayout />}>
          <Route path="/admin/login" element={<AdminLogin />} />
        </Route>

        {/* Admin Dashboard Routes with CoreUI layout */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="product-range" element={<Products />} />
          <Route path="news" element={<News />} />
          <Route path="herocarousel" element={<HeroCarouselAdmin />} />
          <Route path="globalexpansion" element={<GlobalExpansionAdmin />} />
          <Route path="/admin/stats" element={<Stats />} />
          <Route path="/admin/power-cables" element={<PowerCablesAdmin />} />
          <Route path="/admin/pipe-coating" element={<AdminPipeCoating />} />
          <Route path="/admin/products" element={<AdminProductSection />} />
          <Route path="/admin/clients" element={<AdminClients />} />
          <Route path="/admin/news-section" element={<NewsSectionAdmin />} />
          <Route
            path="/admin/quality-control"
            element={<AdminQualityControl />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
