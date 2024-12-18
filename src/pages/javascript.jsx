import React from "react";
import Nav from "../components/nav";
import ContentBody from "../components/contentBody";

const Javascript = () => {
  return (
    <div>
      <Nav />
      <header className="home-page">
        <ContentBody pageName={"JAVASCRIPT </>"}/>
      </header>
    </div>
  );
};

export default Javascript;