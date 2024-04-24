import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import { Link } from "react-router-dom";

function Home() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <div className="w-[100vw] overflow-hidden">
        <div
          data-scroll
          data-scroll-speed="-.5"
          className="w-[100vw] flex justify-around items-center h-[100vh]"
        >
          <h1 className="text-[2vw] w-[30vw]">
            Better Solutions For The Waste Around You!
          </h1>
          <img
            className="w-[30vw] z-0"
            src="https://cdn.downtoearth.org.in/library/large/2016-05-23/0.42611000_1463993925_book-cover.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-center items-center w-[100vw] h-[100vh] pt-10 overflow-hidden">
        <img
        data-scroll
        data-scroll-speed="-1"
          className="w-[100vw]"
          src="https://portfolio.cept.ac.in/assets/projects/visuals/2017/3025/visual_20170426140848_slide6.jpg"
          alt=""
        />
      </div>

      <div className="flex justify-around items-center w-[100vw] h-[100vh]">
        <div className="w-[45vw]">
          <h1 className="text-[2vw]">Community Engagement</h1>
          <br />
          <p>
            We actively engage with local communities, businesses, and
            stakeholders to promote waste reduction, recycling, and
            environmental stewardship. Through educational initiatives and
            outreach programs, we empower individuals and organizations to make
            sustainable choices.
          </p>
          <br />
          <Link className="bg-zinc-700 border-zinc-300 shadow-white shadow-sm" to="/contribute">Help Us</Link>
        </div>
        <img
          className="w-[30vw]"
          src="https://files.auroville.org/auroville-org/0a3b96ab-1914-4505-b948-20eeb5914fdf.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
