//import React from 'react';
import React,{ useState } from 'react';
//include images into your bundle
//create your first component


//create your first component
const Home = () => {

    
	const [sombra,setChange]=useState ("");

	 
      
	return (

		
		<div className="text-center bg-dark  d-flex flex-column p-2"style={{margin: "50px auto", width: "130px"}}>
		  
		  
			<div onClick={() => setChange("red")} 
				className={"cols-3 bg-danger text-center rounded-circle m-2 p-2 "+ " " + 
				(sombra === "red" ? "SombraR" : "")}>

				</div>

			<div onClick={() => setChange("yellow")} 
				className={"cols-3 bg-warning text-center rounded-circle m-2 p-2 " + " " + 
				(sombra === "yellow" ? "SombraY" : "")}> 
				</div>
			
				<div onClick={() => setChange("green")} 
				className={"cols-3 bg-success text-center rounded-circle m-2 p-2" + " " + 
				(sombra === "green" ? "SombraG" : "")}> 
				</div>
		</div>

	);
};

export default Home;
