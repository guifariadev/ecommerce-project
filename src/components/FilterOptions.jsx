import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ShopContext } from "../context/ShopContext";
import { useLocation, useNavigate } from "react-router-dom";

const FilterOptions = ({ baseCategory, onFilter }) => {
  const { products, search } = useContext(ShopContext);
  const [openFilters, setOpenFilters] = useState(false);
  const [openSwitcher, setOpenSwitcher] = useState(false);
  const [category, setCategory] = useState([]);

  // router-dom config
  const location = useLocation();
  const navigate = useNavigate();
  const collectionPages = [
    { name: "Men", path: "/men" },
    { name: "Women", path: "/women" },
    { name: "Children", path: "/children" },
    // { name: "Accessories", path: "/accessories" },
  ];
  const currentPath = location.pathname;
  const filteredPages = collectionPages.filter(
    (page) => page.path !== currentPath
  );

  useEffect(() => {
    let filtered = products.filter((item) => item.category === baseCategory);
    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.type)); // <== wear type: Topwear, Shoes, Underwear
    }
    // Filter by search term
    if (search.trim() !== "") {
      const lowerSearch = search.toLowerCase();
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(lowerSearch)
      );
    }
    onFilter(filtered);
  }, [category, baseCategory, products, onFilter, search]);

  const toggleCategory = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  return (
    <div className="relative flex gap-10 p-4 px-5 mt-5 z-10 max-w-7xl mx-auto">
      {/* Collection Switcher */}
      <div className="flex flex-col gap-y-2">
        <button
          className="flex items-center gap-2 rounded-2xl cursor-pointer w-fit h-fit"
          onClick={() => setOpenSwitcher((prev) => !prev)}
        >
          Other collections
          {openSwitcher ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
        {openSwitcher && (
          <div className="absolute bg-white shadow-xs rounded-sm p-5 top-10">
            <div className="flex flex-col gap-2">
              {filteredPages.map((page) => (
                <button
                  key={page.name}
                  onClick={() => {
                    setOpenSwitcher(false);
                    navigate(page.path);
                  }}
                  className="hover:underline cursor-pointer text-left"
                >
                  {page.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
  
      {/* Filters */}
      <div className="flex flex-col gap-y-2">
        <button
          className="flex items-center gap-2 rounded-2xl cursor-pointer w-fit h-fit"
          onClick={() => setOpenFilters((prev) => !prev)}
        >
          Filters {openFilters ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
        {openFilters && (
          <div className="absolute bg-white shadow-xs h-fit rounded-sm p-5 top-10 w-fit flex-nowrap">
            <div className="flex flex-col gap-2">
              {["Topwear", "Underwear", "Shoes"].map((type) => (
                <label key={type} className="flex gap-2">
                  <input
                    type="checkbox"
                    value={type}
                    onChange={toggleCategory}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default FilterOptions;
