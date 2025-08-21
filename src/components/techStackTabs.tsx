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
      {/* Tabs navigation as square rounded buttons */}
      <div className="flex gap-2 mb-4 justify-center">
        {categories.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-1
               border-[#B8AE88] 
              text-sm rounded-md transition-colors
              ${activeTab === tab.name
                ? "bg-[#B8AE88] text-black"
                : "bg-black text-[#B8AE88] hover:bg-[#B8AE88] hover:text-black border  border-[#B8AE88]"
              }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      {/* Tab content */}
      {/* <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
        {categories.find((tab) => tab.name === activeTab)?.content}
      </div> */}
    </div>
  );
}