import React from "react";
import HeroInvestor from "../components/Investor/HeroInvestor";
import InvestorContent from "../components/Investor/InvestorContent";
import ReportsSection from "../components/Investor/ReportsSection";
import FinancialSection from "../components/Investor/FinancialSection";

const Investors = () => {
  return (
    <>
      <HeroInvestor />
      <InvestorContent />
      <ReportsSection />
      <FinancialSection />
    </>
  );
};

export default Investors;
