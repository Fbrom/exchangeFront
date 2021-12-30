import React from "react";
import NavBar from "./navBar";
import DashboardContainer from "../components/dashboardDivisas/dashboardContainer";


const dashboardPage = () => {
  return (
    <div className="">
      <NavBar />
      <div className="">
        <DashboardContainer />
      </div>
    </div>
  );
};

export default dashboardPage;