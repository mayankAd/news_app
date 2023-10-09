import React from "react";

const News_card = (props) => {
  return (
    <div className="flex flex-col w-[200px] h-[200px] md:w-[350px] md:h-[300px] rounded-md overflow-hidden shadow-md shadow-gray-500 hover:shadow-md hover:shadow-black bg-gray-600 cursor-pointer transition-all " >
      <div className=" h-[100%] object-contain">
        <img
          src={props.imglink}
          alt=""
        />
      </div>
      <div className="text-white pl-2 pt-4">
        <h3 className="font-bold text-xl">{props.article}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default News_card;
