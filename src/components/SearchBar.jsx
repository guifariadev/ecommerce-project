import React, { useContext, useRef} from 'react';
import { ShopContext } from '../context/ShopContext';
import { BiSearch } from 'react-icons/bi';
import { IoIosClose } from "react-icons/io";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const searchRef = useRef(null);

  return showSearch ? (
    <div className="flex justify-center ">
      <div
        ref={searchRef}
        className="absolute top-55 bg-white px-5 py-2 rounded-2xl flex items-center w-3/4 sm:w-2/5 shadow-lg"
      >
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm px-5"
        />
        <BiSearch className="absolute size-3" />
        <IoIosClose
          onClick={() => {
            setShowSearch(false);
            setSearch("");
          }}
          className="ml-2 size-6 cursor-pointer"
        />
      </div>
    </div>
  ) :null ; 
};

export default SearchBar;
