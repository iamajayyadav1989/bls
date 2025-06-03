import React from "react";
import ProductsHero from "../components/Products/ProductsHero";
import PowerCables from "../components/PowerCables";
import PipeCoating from "../components/PipeCoating";
import ProductSection from "../components/ProductSection";

const Products = () => {
  return (
    <>
      <ProductsHero />
      <PowerCables />
      <PipeCoating />
      <ProductSection />
    </>
  );
};

export default Products;
