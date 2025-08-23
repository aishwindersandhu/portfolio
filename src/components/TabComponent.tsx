import React from 'react';

export const TabComponent = ({ iconList }) => {
  const renderToolkit = () => {
    let iconsArr: HTMLElement[] = [];
    iconList.map((icon) => {
      const iconName = icon.name.toLowerCase();
      const iconDiv  = <div className="relative group flex flex-col 
          text-center p-3 border w-20 h-20 
          border-white dark:border-white/10 rounded-xl 
          bg-white/30 dark:bg-white/10 shadow-2xl shadow-indigo-950/5"
        style={{ width: '60px', height: '60px', justifyContent: 'center', alignItems: 'center' }}>
        <a href={icon.link}
          target="_blank"
          rel="noopener noreferrer">
          <img src={`/icons/${iconName}.svg`} alt={icon.name} className="w-10 h-10" />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                   bg-black text-white text-xs rounded px-2 py-1 opacity-0 
                   group-hover:opacity-100 transition dark:bg-white dark:text-black z-50">
            {icon.name}
          </span>
        </a>
      </div>;
      iconsArr.push(iconDiv);
    })
    return iconsArr;
  }
  return (
    <div className="flex flex-row flex-wrap gap-2 " style={{ justifyContent: 'center' }}>
      {renderToolkit()}
    </div>
  )
}