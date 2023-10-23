import React from "react";
import { useContext, useState, useEffect } from "react";
import Searchify from "../assets/s-logo.png";
import { SearchInput } from "./SearchInput";
import Navbar from "./Navbar";
import { Context } from "../utils/ContextApi";
import { GoSearch } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import { SlTag } from "react-icons/sl";
import { Link } from "react-router-dom";

const menu = [
  { name: "All", icon: <GoSearch /> },
  { name: "Images", icon: <BsImage size={14} /> },
  { name: "News", icon: <BiNews /> },
  { name: "Videos", icon: <RiVideoLine /> },
  { name: "Shopping", icon: <SlTag size={14} /> },
];

const SearchResultHandler = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const { setImgSearch } = useContext(Context);

  useEffect(() => {
    return () => setImgSearch(false);
  }, []);

  const clickHandler = (menuItem) => {
    let isTypeImage = menuItem.name === "Images";
    setSelectedMenu(menuItem.name);
    setImgSearch(isTypeImage ? true : false);
  };

  return (
    <div className="sticky top-0 bg-[#212024] w-full">
      <div className="flex justify-between items-start w-full shadow-lg">
        <div className="flex items-center ml-4 space-x-8 w-full md:items-start md:ml-10 md:space-x-10">
          <Link to="/">
            <img
              src={Searchify}
              className="mt-8 ml-2 w-14 h-10 sm:w-14 sm:h-10"
              alt=""
            />
          </Link>
          <SearchInput className="" />
        </div>
        <div>
          <Navbar />
        </div>
      </div>
      <div className="flex md:ml-48 ">
        {menu.map((menu, index) => (
          <span
            key={index}
            className={`flex items-center p-3 text-[#5f6368] cursor-pointer relative w-fit ${
              selectedMenu === menu.name ? "text-[#1a73e8]" : ""
            }`}
            onClick={() => clickHandler(menu)}
          >
            <span className="hidden mr-2 md:block">{menu.icon}</span>
            <span className="text-sm">{menu.name}</span>
            {selectedMenu === menu.name && (
              <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#00FFBB] bottom-0 left-[10px]" />
            )}
          </span>
        ))}
      </div>
      <hr style={{ borderColor: "gray" }} />
    </div>
  );
};

export default SearchResultHandler;
