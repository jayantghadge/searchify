import React from "react";

function createMarkup(html) {
  return { __html: html };
}

const SearchItemTemplate = ({ data }) => {
  return (
    <div className="text-white flex-col py-4 max-w-[700px]">
      <div
        className="cursor-pointer group"
        onClick={() => window.open(data.link)}
      >
        <div className="text-sm text-blue-300 truncate">
          {data.formattedUrl}
        </div>
        <div className="pt-2 text-[#469f87] group-hover:underline md:text-xl">
          {data.title}
        </div>
      </div>
      <div
        className="text-sm text-[#777777] leading-6 pt-1"
        dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}
      />
    </div>
  );
};

export default SearchItemTemplate;
