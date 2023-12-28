import React from "react";
import "./App.css";
import Heading from "./assets/components/Heading";
import Input from "./assets/components/Input";
import { DataProvider } from "./context/datacontext.jsx";
import TodosLi from "./assets/components/TodosLi.jsx";
import Listfooter from "./assets/components/Listfooter.jsx";

function App() {
  return (
    <DataProvider>
      <main className="">
        <div className="sm:w-[100%] md:w-[100%]">
          <div className="h-[40vh] flex-col flex items-center  justify-center dark:bg-light bg-dark">
            <Heading />
            <Input />
          </div>
          <div className="min-h-[60vh] bg-bottom dark:bg-white ">
            <div className="flex flex-col md:translate-y-[-2.2rem] translate-y-[-3rem] items-center w-[100%]">
              <TodosLi />
              <Listfooter />
            </div>
          </div>
          <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="www.linkedin.com/in/hari-prasanth-developer"  target="_blank">hari prasanth</a>.
  </div>
        </div>
   
      </main>
    </DataProvider>
  );
}

export default App;
