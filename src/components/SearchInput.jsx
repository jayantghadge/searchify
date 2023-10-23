import React, { useState } from "react";
import { BiSearchAlt, BiSolidMicrophone } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useNavigate, useParams } from "react-router-dom";

export const SearchInput = ({ onSearch }) => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  const handleClearInput = () => {
    setSearchQuery("");
  };

  return (
    <div className="relative  md:w-[600px] mt-8">
      <div className="flex items-center rounded-full mb-2  border hover:shadow-sm hover:shadow-[#00FFBB] md:ml-10">
        <div className="flex relative items-center w-full">
          <BiSearchAlt className="absolute left-3 text-gray-600" />
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
            autoFocus
            className="py-2 pl-8 text-sm rounded-full sm:w-full sm:py-2 sm:pr-32 focus:outline-none"
            placeholder="Search Anything"
          />
          {searchQuery && (
            <button
              onClick={handleClearInput}
              className="absolute right-12 text-gray-600 hover.text-red-500 focus:outline-none"
            >
              <RxCross2 className="" />
            </button>
          )}
          <BiSolidMicrophone className="absolute right-3 text-gray-600" />
        </div>
      </div>
    </div>
  );
};
