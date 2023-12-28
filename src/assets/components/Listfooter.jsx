import React, { useContext } from "react";
import DataContext from "../../context/datacontext";

const Listfooter = () => {
  const {
    handleActive,
    handleCompleted,
    handleAll,
    handleClearcompleted,
    count,
    indicator,
    isDarkMode,
  } = useContext(DataContext);

  return (
    <footer className="dark:text-primary select-none font-[500] xl:w-[40%] lg:w-[60%] w-[90%] md:w-[600px] md:text-[16px] text-[14.5px] md:rounded-b-lg  text-secondary">
      <section className="flex rounded-b-md  dark:bg-white shadow-back dark:shadow-back bg-primary w-[100%]  justify-between">
        <div className="flex-cls">
          <h1 className="p-3">{`${count} items left`}</h1>
        </div>
        <div className="md:flex hidden  justify-center">
          <button
            className="p-4 "
            style={
              isDarkMode === "white"
                ? indicator === "all"
                  ? { color: "#3a7cfd" }
                  : { color: "#b0b2cb" }
                : indicator === "all"
                ? { color: "#3a7cfd" }
                : { color: "gray" }
            }
            onClick={handleAll}
          >
            All
          </button>
          <button
            className="p-4"
            style={
              isDarkMode === "white"
                ? indicator === "active"
                  ? { color: "#3a7cfd" }
                  : { color: "#b0b2cb" }
                : indicator === "active"
                ? { color: "#3a7cfd" }
                : { color: "gray" }
            }
            onClick={handleActive}
          >
            Active
          </button>
          <button
            className="p-4"
            style={
              isDarkMode === "white"
                ? indicator === "completed"
                  ? { color: "#3a7cfd" }
                  : { color: "#b0b2cb" }
                : indicator === "completed"
                ? { color: "#3a7cfd" }
                : { color: "gray" }
            }
            onClick={handleCompleted}
          >
            Completed
          </button>
        </div>
        <div className="flex-cls">
          <button
            className="p-3 dark:hover:text-gray-800 hover:text-white"
            onClick={handleClearcompleted}
          >
            Clear completed
          </button>
        </div>
      </section>
      {/* for mobile view */}
      <section className="md:hidden  mt-4 rounded-md dark:bg-white bg-primary">
        <div className="flex justify-center">
          <button
            className="p-2"
            style={
              isDarkMode === "white"
                ? indicator === "all"
                  ? { color: "#3a7cfd" }
                  : { color: "#b0b2cb" }
                : indicator === "all"
                ? { color: "#3a7cfd" }
                : { color: "gray" }
            }
            onClick={handleAll}
          >
            All
          </button>
          <button
            className="p-2"
            style={
              isDarkMode === "white"
                ? indicator === "active"
                  ? { color: "#3a7cfd" }
                  : { color: "#b0b2cb" }
                : indicator === "active"
                ? { color: "#3a7cfd" }
                : { color: "gray" }
            }
            onClick={handleActive}
          >
            Active
          </button>
          <button
            className="p-2"
            style={
              isDarkMode === "white"
                ? indicator === "completed"
                  ? { color: "#3a7cfd" }
                  : { color: "#b0b2cb" }
                : indicator === "completed"
                ? { color: "#3a7cfd" }
                : { color: "gray" }
            }
            onClick={handleCompleted}
          >
            Completed
          </button>
        </div>
      </section>
    </footer>
  );
};

export default Listfooter;
