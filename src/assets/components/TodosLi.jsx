import React, { useContext } from "react";
import DataContext from "../../context/datacontext";

const TodosLi = () => {
  const { handleCheck, list, handleDelete, isDarkMode } =
    useContext(DataContext);

  return (
    <section className=" flex-cls lg:w-[60%] xl:w-[40%] md:w-[600px] select-none w-[90%] ">
      <ul className=" bg-primary ul-box shadow-back dark:shadow-back dark:bg-white  text-secondary flex flex-col rounded-t-lg  w-[100%]">
        {list.map((item) => (
          <li
            className="flex capitalize justify-between relative group dark:border-gray-300 border-b-[1px] border-gray-700  px-[20px] py-[15px] md:p-4 dark:text-primary"
            key={item.id}
          >
            <div className="font-[400] md:text-[1rem] group text-[15px]">
              <input
                id={item.itemName}
                onChange={() => handleCheck(item.id)}
                type="checkbox"
                checked={item.checked}
                className="peer appearance-none h-5 rounded-full border-secondary   w-5 border-[1.5px] translate-y-1 checked:bg-gradcheck checked:bg-center  checked:bg-no-repeat "
                htmlFor="checkbox"
              />
           
              <label
                className="ml-5 text-[15px] max-[373px]:ml-3 max-[373px]:text-[10.8px] max-[413px]:text-[13px] "
                style={
                  isDarkMode === "white"
                    ? item.checked
                      ? { textDecorationLine: "line-through", color: "#575971" }
                      : { textDecoration: "none" }
                    : item.checked
                    ? { textDecorationLine: "line-through", color: "#DADAE1" }
                    : { textDecoration: "none" }
                }
                htmlFor={item.itemName}
              >
                   <span
                className="absolute md:left-[1.3rem] left-[1.5rem] top-[24.8px] md:top-[1.6rem]"
                id={item.itemName}
                style={
                  item.checked === true
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                  <path
                    fill="none"
                    stroke="#FFF"
                    strokeWidth="2"
                    d="M1 4.304L3.696 7l6-6"
                  />
                </svg>
              </span>
                {item.itemName}
              </label>
            </div>
            <button
              className="opacity-0 group-hover:opacity-[100%]"
              onClick={() => handleDelete(item.id)}
            >
              <svg
                className="cursor-pointer "
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
              >
                <path
                  fill="#494C6B"
                  fillRule="evenodd"
                  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                />
              </svg>
            </button>
      
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodosLi;
