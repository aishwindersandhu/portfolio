import React, { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { TabComponent } from './TabComponent';

export const StackTabs = () => {
  const categories = [
    {
      name: "Technologies",
      key: '#tech',
      content: [{
        name: 'JS',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'HTML5',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
      }, {
        name: 'CSS3',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
      },
      {
        name: 'AngularJS',
        link: 'https://angularjs.org/'
      },
      {
        name: 'ReactJS',
        link: 'https://react.dev/'
      },
      {
        name: 'TypeScript',
        link: 'https://www.typescriptlang.org/'
      },
      {
        name: 'Redux',
        link: 'https://redux.js.org/'
      },
      {
        name: 'Webpack',
        link: 'https://webpack.js.org/'
      },
      {
        name: 'TailwindCSS',
        link: 'https://tailwindcss.com/'
      },
      {
        name: 'BootStrap4',
        link: 'https://getbootstrap.com/'
      },
      {
        name: 'Jest',
        link: 'https://jestjs.io/'
      },
      {
        name: 'Python',
        link: 'https://www.python.org/'
      }]
    },
    {
      name: "Business & Design",
      key: '#business-design',
      content: [{
        name: 'Jira',
        link: 'https://www.atlassian.com/software/jira'
      },
      {
        name: 'Figma',
        link: 'https://www.figma.com/files/team/1303553213571263885/recents-and-sharing?fuid=1078645079340892952'
      }]
    },
    {
      name: "Utilities",
      key: '#utlities',
      content: [{
        name: 'Git',
        link: 'https://git-scm.com/'
      },
      {
        name: 'Jenkins',
        link: 'https://www.jenkins.io/'
      },
      {
        name: 'Postman',
        link: 'https://www.postman.com/'
      },
      {
        name: 'Netlify',
        link: 'https://www.netlify.com/'
      }]
    }
  ];
  const [activeTab, setActiveTab] = useState('Technologies');
  const { lightMode } = useContext(ThemeContext);
  const styles = {
    inactiveStyle: lightMode ? "bg-#[#B8AE88] text-black hover:bg-[#B8AE88] hover:text-black border  border-black" :
      "bg-black text-[#B8AE88] hover:bg-[#B8AE88] hover:text-black border  border-[#B8AE88]"
  }
  return (
    <div className="w-full max-w-md mx-auto">
      {/* Tabs navigation as square rounded buttons */}
      <div className="flex gap-2 mb-4 justify-center">
        {categories.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-1
               border-[#B8AE88] 
              text-sm rounded-md transition-colors
              ${activeTab === tab.name
                ? "bg-[#B8AE88] text-black"
                : styles.inactiveStyle
              }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      {/* Tab content */}
      <div className="px-3 rounded-lg text-center">
        {
          categories.map((tab)=>{
            if(tab.name === activeTab){
              return <TabComponent iconList ={tab.content}></TabComponent>
            }
          })
        }
      </div>

    </div>
  );
}