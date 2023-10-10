import React from "react";

const News_card = (props) => {
  return (
    <a href={props.url} target="_blank">
    <div className="flex flex-col w-[200px] h-[250px] md:w-[350px] md:h-[350px] rounded-md overflow-hidden shadow-md shadow-gray-500 hover:shadow-md hover:shadow-black bg-gray-600 cursor-pointer transition-all " >
      <div className=" h-[200px] w-[100%]">
        <img className="w-[100%] h-[100%] object-cover"
          src={props.imglink}
          alt=""
        />
      </div>
      <div className="flex flex-col text-white pl-2 h-[50%] gap-2">
        <h3 className="font-bold text-sm md:text-lg md:pt-4">{props.title}</h3>
        <p className="text-xs md:text-sm">{props.description}</p>
      </div>
    </div>
    </a>
  );
};

export default News_card;
