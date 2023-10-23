import React, { useState, useContext, useEffect } from "react";
import Footer from "./Footer";
import SearchResultHandler from "./SearchResultHandler";
import { useParams } from "react-router-dom";
import { Context } from "../utils/ContextApi";
import { fetchDatafromApi } from "./../utils/api";

import SearchItemTemplate from "./SearchItemTemplate";
import SearchImageTemplate from "./SearchImageTemplate";
import Pagination from "./Pagination";

const SearchResult = () => {
  const [result, setResult] = useState();
  const { query, startIndex } = useParams();
  const { imgSearch } = useContext(Context);

  useEffect(() => {
    fetchSearchResults();
    window.scrollTo(0, 0);
  }, [query, startIndex, imgSearch]);

  const fetchSearchResults = () => {
    let payload = { q: query, start: startIndex };
    if (imgSearch) {
      payload.searchType = "image";
    }
    fetchDatafromApi(payload).then((res) => {
      console.log(res);
      setResult(res);
    });
  };

  if (!result) return;
  const { items, queries, searchInformation } = result;

  return (
    <div className="flex flex-col min-h-screen bg-[#212024]">
      <SearchResultHandler />
      <main className="px-4 text-gray-600 md:pl-48">
        <div className="flex pt-4 text-xs">
          {`About ${searchInformation.formattedTotalResults} results (${searchInformation.formattedSearchTime} seconds) `}
        </div>
        {!imgSearch ? (
          <>
            {items.map((item, index) => (
              <SearchItemTemplate key={index} data={item} />
            ))}
          </>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6">
            {items.map((item, index) => (
              <SearchImageTemplate key={index} data={item} />
            ))}
          </div>
        )}
        <Pagination queries={queries} />
      </main>
      <Footer />
    </div>
  );
};

export default SearchResult;
