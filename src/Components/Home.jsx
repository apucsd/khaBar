import React from "react";
import Lottie from "lottie-react";
import food from "../assets/food.json";

const Home = () => {
  return (
    <div className="gap-3  border grid md:grid-cols-2 items-center">
      <div className="p-8">
        <h1 className="text-4xl text-center ">
          <span className="text-blue-500 font-semibold ">
            Kha.<span className="text-violet-600">B</span>ar
          </span>{" "}
          restaurant (খাবার রেস্টুরেন্ট)
        </h1>
        <p className="text-gray-600 my-3">
          Food is a major part of basic human needs. Everyone loves to eat. And
          there is no such thing as a food lover.
        </p>
      </div>
      <div className="border ">
        <Lottie style={{ height: "450px" }} animationData={food} />
      </div>
    </div>
  );
};

export default Home;
