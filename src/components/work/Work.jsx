import React from "react";
import WorkCard from "../../chip/WorkCard";
import "./Responsive.css";
const Work = () => {
  return (
    <div id="works" className="container m-auto mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">Works</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-[100%]">
          Here are some of my works.
        </p>
      </div>
      {/* card */}
      <div className="card-wrapper mx-auto w-[90%] sm:w-fit mt-5 main-card">
        <div
          className="card-box "
          style={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto",
            scrollSnapAlign: "start",
          }}
        >
          <WorkCard />
        </div>
      </div>
    </div>
  );
};

export default Work;
