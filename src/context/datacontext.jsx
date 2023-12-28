import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [originalList, setOriginalList] = useState([]);


  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("items"));
    console.log(storedTasks);
    const defaultTasks = [
      {
        id: 1,
        checked: true,
        itemName: "complete online javascript course",
      },
      {
        id: 2,
        checked: false,
        itemName: "jog around the park 3x",
      },
      {
        id: 3,
        checked: false,
        itemName: "10 minutes meditation",
      },
      {
        id: 4,
        checked: false,
        itemName: "read for 1 hour",
      },
      {
        id: 5,
        checked: false,
        itemName: "complete todo app on frontend mentor",
      },
    ];

    const tasksToUse =  storedTasks.length===0?defaultTasks:storedTasks;
   

    localStorage.setItem("items", JSON.stringify(tasksToUse));
    setOriginalList(tasksToUse);
    setlist(tasksToUse);
    console.log(tasksToUse);
  }, []);
  const [list, setlist] = useState(originalList);
  const [count, setcount] = useState("0");
  const [newitem, setnewitem] = useState("");
  const [indicator, setindicator] = useState("all");

  const [isDarkMode, setIsDarkMode] = useState("white");

  if (isDarkMode === "white") {
    document.documentElement.classList.add("white");
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("white");
  }

  const toggleDarkMode = () => {
    const mode = isDarkMode === "white" ? "dark" : "white";
    setIsDarkMode(mode);
  };

  const handleActive = () => {
    let listItems = originalList.filter((item) => !item.checked);
    setlist(listItems);
    setindicator("active");
  };

  const handleAll = () => {
    setlist(originalList);
    setindicator("all");
  };

  const handleCompleted = () => {
    let listItems = originalList.filter((item) => item.checked);
    setlist(listItems);
    setindicator("completed");
  };

  let handleDelete = (id) => {
    let listItems = originalList.filter((item) => item.id !== id);
    localStorage.setItem("items", JSON.stringify(listItems));
    setOriginalList(listItems);
    setlist(listItems);
  };
  const handleClearcompleted = () => {
    let listItems = originalList.filter((item) => !item.checked);
    console.log(listItems);
    localStorage.setItem("items", JSON.stringify(listItems));
    setOriginalList(listItems);
    setlist(listItems);
  };
  const handleInput = (item) => {
    let Id = list.length ? list[list.length - 1].id + 1 : 1;
    let addNewitem = {
      id: Id,
      checked: false,
      itemName: item,
    };
    const listItems = [...list, addNewitem];
    localStorage.setItem("items", JSON.stringify(listItems));
    setlist(listItems);
  };

  let handleCheck = (id) => {
    let listItems = list.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setOriginalList(listItems);
    setlist(listItems);

    localStorage.setItem("items", JSON.stringify(listItems));
  };

  useEffect(() => {
    let listItems = list.filter((item) => !item.checked);
    setcount(listItems.length);
  }, [handleCheck]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newitem) return;
    handleInput(newitem);
    setnewitem("");
  };
  return (
    <DataContext.Provider
      value={{
        handleSubmit,
        newitem,
        setnewitem,
        handleCheck,
        handleDelete,
        handleInput,
        list,
        setlist,
        handleActive,
        handleCompleted,
        handleAll,
        handleClearcompleted,
        count,
        setcount,
        indicator,
        setindicator,
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
