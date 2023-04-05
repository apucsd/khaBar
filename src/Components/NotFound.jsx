import React from "react";
import Lottie from "lottie-react";
import notfound from "../assets/Not found.json";

const NotFound = () => {
  return (
    <div className="my-4">
      <Lottie style={{ height: "100vh" }} animationData={notfound} />
    </div>
  );
};

export default NotFound;
