import React from "react";
import Navbar from "../Navbar/Navbar";
import News_container from "../News_container/News_container";

const News = () => {
  return (
    <div className="bg-gray-300 w-[calc(100%-200px)] ml-[200px] md:ml-[400px]">
      <Navbar />
      {/* <News_container/> */}
    </div>
  );
};

export default News;
