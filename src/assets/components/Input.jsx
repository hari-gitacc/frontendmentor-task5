import React, { useContext, useRef } from "react";
import DataContext from "../../context/datacontext.jsx";

const Input = () => {
  const { handleSubmit, newitem, setnewitem } = useContext(DataContext);
  const forFocus = useRef();
  return (
    <div className="lg:w-[60%] xl:w-[40%] md:w-[600px] w-[90%] md:translate-y-0  xl:translate-y-[-.3rem] translate-y-[-.8rem]  xl:mt-8">
      <form action="" className="relative" onSubmit={handleSubmit}>
        <button
          className="h-5 rounded-full border-secondary   w-5 border-[1.5px] absolute top-[16px] left-4"
          onClick={() => forFocus.current.focus()}
          type="submit"
        ></button>

        <input
          className="px-[1rem] placeholder:select-none pl-[3.5rem] dark:bg-white dark:placeholder:text-secondary dark:shadow-back shadow-back caret-blue-600 text-secondary rounded-lg outline-none border-none placeholder:font-[500] placeholder:text-primary py-[.8rem] w-[100%] bg-primary"
          type="text"
          autoFocus
          ref={forFocus}
          placeholder="Create a new todo"
          value={newitem}
          onChange={(e) => setnewitem(e.target.value)}
          required
        />
      </form>
    </div>
  );
};

export default Input;
