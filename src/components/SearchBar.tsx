"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setSearchQuery } from "@/redux/jobSlice";

const SearchBar: React.FC = () => {

  const search = useSelector((state: RootState) => state.jobs.searchQuery);
  const dispatch = useDispatch<AppDispatch>();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  dispatch(setSearchQuery(e.target.value));
  };

  return (
    <input 
      type="text"
      placeholder="Search jobs..." 
      className="w-full h-20 lg:w-1/2 p-2 border bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText rounded-md"
      value={search}
      onChange={handleSearchChange} 
    />
  );
};

export default SearchBar