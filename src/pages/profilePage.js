import React from "react";
import NavBar from "./navBar";
import ProfileContainer from "../components/profileForm/profileContainer";


const profile = () => {
  return (
    <div className="">
      <NavBar />
      <div className="">
        <ProfileContainer />
      </div>
    </div>
  );
};

export default profile;
