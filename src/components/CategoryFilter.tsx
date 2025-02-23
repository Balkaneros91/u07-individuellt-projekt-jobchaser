"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setSelectedCategory } from "@/redux/jobSlice";

const CategoryFilter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = ["All", "UI/UX Designer", "Mobile App Developer", "Front-end Developer"];

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value === "All" ? "" : e.target.value;
    dispatch(setSelectedCategory(selectedValue));
  };

  return (
    <select onChange={handleCategoryChange} className="border border-gray-300 rounded-md h-20 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <option value="">Select a category</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
