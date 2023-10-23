import React, { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
  const [imgSearch, setImgSearch] = useState(false);

  return (
    <Context.Provider
      value={{
        imgSearch,
        setImgSearch,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
