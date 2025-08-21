import React, { useState } from 'react';

export const StackTabs = () => {
  const categories = [
    {
      name: "Technologies",
      key: '#tech'
    },
    {
      name: "Business & Design",
      key: '#business-design'
    },
    {
      name: "Utilities",
      key: '#utlities'
    }
  ];
  const [activeTab, setActiveTab] = useState('Technologies');
  return (
    <div className="w-full max-w-md mx-auto p-4">
      {/* Tabs navigation */}
       <div className="flex gap-2 mb-4 justify-center">
        {categories.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-1 text-sm font-medium rounded-full transition-colors
              ${
                activeTab === tab.name
                  ? "bg-[#B8AE88] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-[#B8AE88] hover:text-white"
              }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {/* <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        {categories.find((tab) => tab.name === activeTab)?.content}
      </div> */}
    </div>
  );
}