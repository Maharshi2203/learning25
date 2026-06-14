import React from "react";

export const TaiwindDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <nav className="bg-white px-6 py-4 flex justify-between items-center border-b border-gray-200">
        <div className="font-bold text-lg text-indigo-600">Dashboard</div>

        <div className="flex gap-4 text-sm text-gray-500">
          <a href="#" className="hover:text-indigo-600">
            Home
          </a>
          <a href="#" className="hover:text-indigo-600">
            Link
          </a>
          <a href="#" className="hover:text-indigo-600">
            Settings
          </a>
        </div>
      </nav>
      <div className="grid grid-cols-4 gap-4">

      <div className="bg-white p-6 rounded border-xl border-gray-100 border-t-4 border-indigo-500">
        <p className="text-sm text-gray-500">USERS</p>
        <p className="text-3xl font-bold text-gray-800 mt-1">15,000</p>
        <p className="text-xs text-green-500 mt1">+10%</p>
      </div>
      
        <div className="bg-white p-6 rounded border-xl border-gray-100 border-t-4 border-green-500">
          <p className="text-sm text-gray-500">USERS</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">15,000</p>
          <p className="text-xs text-green-500 mt1">+10%</p>
        </div>
        <div className="bg-white p-6 rounded border-xl border-gray-100 border-t-4 border-yellow-500">
          <p className="text-sm text-gray-500">USERS</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">15,000</p>
          <p className="text-xs text-green-500 mt1">+10%</p>
        </div>
        <div className="bg-white p-6 rounded border-xl border-gray-100 border-t-4 border-red-500">
          <p className="text-sm text-gray-500">USERS</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">15,000</p>
          <p className="text-xs text-green-500 mt1">+10%</p>
        </div>
      </div>
    </div>
  );
};