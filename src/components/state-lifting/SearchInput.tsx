import type React from "react";

interface props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ search, setSearch }: props) => {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search User ..."
    />
  );
};

export default SearchInput;
