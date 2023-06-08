import React from "react";
import Layout from "../../components/Template/Layout";
import { Button } from "../../components/Atom";
import Header from "../../components/Molekul/Header";

const Homepage = () => {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto ">
      <div className="h-full w-full  overflow-auto">
        <div>
          <Header />
          <h1 className="font-bold text-3xl">
            Unlimited movies, TV shows, and more
          </h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <Button placeholder="Ged Address &#62;" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
