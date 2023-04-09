import React from "react";

const Contact = () => {
  return (
    <div className="flex lg:flex md:flex-row my-8  flex-col-reverse items-center">
      <div className="w-full my-4 p-4 text-center">
        <input
          type="text"
          placeholder="Type your name here"
          className="input input-bordered input-primary my-3 w-full max-w-xs"
        />
        <br />

        <input
          type="email"
          placeholder="Type your email here"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <br />
        <textarea
          placeholder="Message"
          className="textarea my-4 textarea-bordered textarea-lg w-full max-w-xs"
        ></textarea>
        <br />
        <button className="btn btn-primary my-4 text-center">Submit</button>
      </div>
      <div className="">
        <img
          className="md:w-full w-1/2 mx-auto"
          src="https://i.ibb.co/M1YLj7g/login.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
