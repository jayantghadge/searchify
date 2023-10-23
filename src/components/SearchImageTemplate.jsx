import React from "react";

const SearchImageTemplate = ({ data }) => {
  return (
    <div
      className="group flex flex-col py-3 cursor-pointer"
      onClick={() => window.open(data.image.contextLink)}
    >
      <div className="rounded-xl overflow-hidden bg-black/[0.03] h-[100px] group-hover:shadow-black">
        <img className="h-full w-full object-contain" src={data.link} alt="" />
      </div>
      <div className="text-xs text-gray-600 pt-2">{data.displayLink}</div>
      <div className="text-sm text-gray-600 truncate pt-1 group-hover:underline ">
        {data.title}
      </div>
    </div>
  );
};

export default SearchImageTemplate;
