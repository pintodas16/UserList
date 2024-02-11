import { createContext, useState } from "react";

const SortSearchContext = createContext();
const SortSearchContextProvider = ({ children }) => {
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const handleFilterTerm = (e) => {
    setFilter(e.target.value);
  };
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <SortSearchContext.Provider
      value={{
        filter,
        searchTerm,
        handleFilterTerm,
        handleSearchTerm,
      }}
    >
      {children}
    </SortSearchContext.Provider>
  );
};
export { SortSearchContextProvider };
