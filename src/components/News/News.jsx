import React from "react";
import Navbar from "../Navbar/Navbar";
import News_container from "../News_container/News_container";

const News = () => {
  return (
    <div className=" w-[calc(100%-200px)] ml-[160px] md:ml-[350px]">
      <Navbar />
      <News_container/>
    </div>
  );
};

export default News;
