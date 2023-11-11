import React, { useState } from "react";
import { BiSearchAlt, BiSolidMicrophone } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Searchify from "../assets/searchify-logo.png";
import Footer from "./Footer";
import { fetchDatafromApi } from "../utils/api";

const Home = () => {
  const navigate = useNavigate();
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");

  const searchQueryHandler = () => {
    if (searchQuery && searchQuery.trim().length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  const handleSearchClick = () => {
    if (searchQuery && searchQuery.trim().length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  const handleClearInput = () => {
    setSearchQuery("");
  };

  const onSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const onInputKeyUp = (e) => {
    if (e.key === "Enter") {
      searchQueryHandler();
    }
  };

  const getRandomUrl = () => {
    const randomSites = ['https://www.randomfactgenerator.com/trivia',
      'https://www.randomfactgenerator.com',];
    return randomSites[Math.floor(Math.random() * randomSites.length)];
  };

  const handleLuckyClick = async () => {
    if (searchQuery) {
      // Fetch the first search result
      try {
        const payload = { q: searchQuery, start: 1 };
        const data = await fetchDatafromApi(payload);
        if (data.items && data.items.length > 0) {
          // Redirect to the first search result
          window.location.href = data.items[0].link;
        } else {
          // Handle no search results found
          alert("No results found for your query");
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        // Handle the error appropriately
      }
    } else {
      // Redirect to a random quote or trivia page
      const randomUrl = getRandomUrl();
      window.location.href = randomUrl;
    }
  };
  

  return (
    <div className="flex flex-col min-h-screen bg-[#212024] w-screen">
      <Navbar />
      <section className="mx-auto mt-20 max-w-screen-md text-center sm:mt-20 sm:text-left">
        <img
          className="mx-auto w-52 h-20 sm:w-[481px] sm:h-36"
          src={Searchify}
          alt=""
        />
        <div className="relative w-full md:w-[600px] mt-8">
          <div className="flex items-center rounded-full mb-2 mx-auto border w-4/5 hover:shadow-sm hover:shadow-[#00FFBB] md:w-full">
            <div className="flex relative items-center md:w-full">
              <BiSearchAlt className="absolute left-3 text-gray-600" />
              <input
                type="text"
                value={searchQuery}
                onChange={onSearchInputChange}
                onKeyUp={onInputKeyUp}
                autoFocus
                className="py-2 pr-32 pl-10 w-full leading-5 rounded-full sm:text-sm focus:outline-none"
                placeholder="Search Anything"
              />
              {searchQuery && (
                <button
                  onClick={handleClearInput}
                  className="absolute right-12 text-gray-600 hover.text-red-500 focus:outline-none"
                >
                  <RxCross2 />
                </button>
              )}
              <BiSolidMicrophone className="absolute right-3 text-gray-600" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 space-y-6 text-white sm:flex-row sm:space-y-0">
          <button
            onClick={handleSearchClick}
            className="bg-[#303134] px-4 py-2 mx-auto rounded-md w-44 sm:w-52 transition-all hover:bg-[#00FFBB] hover:text-[#000000]"
          >
            Search
          </button>
          <button onClick={handleLuckyClick} className="bg-[#303134] mx-auto px-4 py-2 rounded-md w-44 sm:w-52 transition-all hover:bg-[#00FFBB] hover:text-[#000000]">
            I'm Feeling Lucky
          </button>
        </div>
      </section>
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default Home;
