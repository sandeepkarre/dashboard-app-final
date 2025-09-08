import React, { useState } from "react";
import { useSelector } from "react-redux";
import Category from "./Category";
import SearchBar from "./SearchBar";

const Dashboard = () => {
  const categories = useSelector(state => state.dashboard.categories);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumb + Filter */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-gray-600">Home / <span className="text-black font-medium">Dashboard</span></div>
        <select className="border rounded px-2 py-1">
          <option>Last 2 days</option>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
        </select>
      </div>

      {/* Header + Search */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard V2</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {categories.map(cat => (
        <Category key={cat.id} category={cat} searchTerm={searchTerm} />
      ))}
    </div>
  );
};

export default Dashboard;
