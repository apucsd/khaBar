import React from "react";
import Lottie from "lottie-react";
import notfound from "../assets/Not found.json";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const { error, status } = useRouteError();

  return (
    <div className="my-4">
      <Lottie style={{ height: "80vh" }} animationData={notfound} />
      <div>
        <h3 className="text-red-600 text-4xl my-3 text-center font-semibold">
          {status}
        </h3>
        <h2 className="text-xl text-center font-semibold font-mono text-blue-600">
          Message: {error.message}
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
