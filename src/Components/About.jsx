import React from "react";
import Lottie from "lottie-react";
import aboutUs from "../assets/about-us.json";

const About = () => {
  return (
    <div className="my-container md:grid grid-cols-2 items-center">
      <div>
        {" "}
        <Lottie style={{ height: "500px" }} animationData={aboutUs} />
      </div>
      <div>
        <h1 className="text-5xl text-center font-semibold underline">
          Our Story
        </h1>

        <br />
        <p>
          KhaBar Restaurant is a bengali concern of food. KhaBar Restaurant has
          a glorious history in Bangladeshi Restaurant Market. KhaBar Restaurant
          has started its journey in January 2022.
        </p>
        <br />
        <h1 className="text-5xl text-center font-semibold underline my-4">
          Our Specialties
        </h1>
        <p>
          Starters. Matata. Banting bacon ‘sushi‘ rolls. Moroccan salad of raw
          carrots, beetroot and dates. Scored calamari with peach, pea, lime and
          coriander salsa. Fresh buffalo mozzarella with gingeredhoney and figs.
          Rolled springbok carpaccio with asparagus and goat’s cheese. Pancakes
          with mushrooms and gruyère.
        </p>
      </div>
    </div>
  );
};

export default About;
