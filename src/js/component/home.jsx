import React from "react";
import { useState } from "react";
//include images into your bundle


//create your first component
const Home = () => {

    
	const [change,setChange]=useState ("");
	
  
	 
      
	return (
		<div className="text-center bg-dark">
		  <div  className={`bg-danger ${(change === "red" ? "iluminado" : "")}`} 
		  onClick={() => setChange("red")}></div>
		  <div  className={"bg-warning" +" " +(change === "yellow" ? "iluminado" : "")} onClick={() => setChange("yellow")}></div>
		  <div  className={`bg-success ${(change === "green" ? "iluminado" : "")}`} onClick={() => setChange("green")}></div>
         
		</div>

	);
};

export default Home;
