import React, {useEffect, useState} from 'react';
import './App.css';
import CurrentTime from "./components/CurrentTime";
import Timer from "./components/Timer";

function App() {


  return (
   <div className={"flex flex-col justify-center items-center h-screen bg-black gap-10"}>
     <CurrentTime/>
     <Timer/>
   </div>
  );
}

export default App;
