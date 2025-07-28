import React from "react";
import { useState, useRef } from "react";

export const SearchInput = () => {
  const debounceRef = useRef(null);
  //mock data
  const mockSuggestions = [
    "Apple",
    "Banana",
    "Blueberry",
    "Cherry",
    "Grape",
    "Orange",
    "Peach",
    "Pineapple",
    "Strawberry",
    "Watermelon",
    "Pomegranate",
  ];
  const styles = {
    dropdown: {
      color: "red",
      cursor: "pointer",
    },
  };
  //want to keep state variables as minimal as possible, to avoid unnecessary re-renders.
  const [filteredList, updateFilteredList] = useState([]);
  const [autoValue, setAutoValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1); //tracker for moving up and down the list using

  const handleInputChange = (data) => {
    //clears previous query reference.
    setAutoValue(data);
    if (debounceRef.current) {
      //clear previous search query.
      clearTimeout(debounceRef.current);
    }
    //debouncing list for optimisation
    debounceRef.current = setTimeout(() => {
      getFilteredList(data); // only runs after user pauses typing
    }, 300);
  };

  const getFilteredList = (item) => {
    let tempList = mockSuggestions.filter((value) => {
      return value.toLowerCase().includes(item.toLowerCase());
    });
    item === "" ? updateFilteredList([]) : updateFilteredList(tempList);
  };

  const handleKeyBoardSelection = (e) => {
    console.log(e);
    if (e.key == "ArrowDown") {
      // +1
      let nextIndex =
        selectedIndex < filteredList.length - 1
          ? selectedIndex + 1
          : selectedIndex;
      setSelectedIndex(nextIndex);
      filteredList[nextIndex] && setAutoValue(filteredList[nextIndex]);
    } else if (e.key == "ArrowUp") {
      //-1
      let prevIndex = selectedIndex > 0 ? selectedIndex - 1 : 0;
      setSelectedIndex(prevIndex);
      filteredList[prevIndex] && setAutoValue(filteredList[prevIndex]);
    } else if (e.key == "Escape") {
      //Escape, then close the list or show nothing
      updateFilteredList([]);
    } else if (e.key == "Enter") {
      //Escape, then close the list or show nothing
      //Ideally make an API call here
      //updateFilteredList([]);
    }
  };
  const handleSelectedItem = (data) => {
    //in case I want to add autocomplete.
    //the value is stored in reference
    setAutoValue(data || "");
  };
  //in case you want to use Typescript // useState<String>("");
  return (
    <div>
      <input
        type="text"
        value={autoValue}
        placeholder="Search Products"
        id="search-input"
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
        onKeyDown={(e) => {
          handleKeyBoardSelection(e);
        }}
      />
      {/* get Target value from the input and send for appi call */}
      {/* Display a list of products after API Call */}
      <div>
        <ul>
          {autoValue !== "" && filteredList.length == 0 ? (
            <div>No Results Found</div>
          ) : (
            filteredList.map((item, index) => {
              return (
                <li
                  key={`search-results-${item}`}
                  style={{
                    ...styles.dropdown,
                    color: index == selectedIndex ? "blue" : "red",
                  }}
                  onClick={() => {
                    handleSelectedItem(item);
                  }}
                >
                  {item}
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};
