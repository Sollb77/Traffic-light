
import React from "react";
import {useState} from react;
//include images into your bundle


//create your first component
const Home = () => {

    
	const [valor1,setValor1]=useState (red)
	const [valor2,setValor2]=useState (Amarillo)
	const [valor3,setValor3]=useState (verde)
    
	  const setCambio = () => {
		setValor1("brillante")
   }
     const setCambio2 = () => {
	   setValor2("brillante")
         }

	 const setCambio3 = () => {
			setValor3("brillante")
			  }
      
	return (
		<div className="text-center bg-dark">
		  <div id="red" className="color" onClick={setCambio}></div>
		  <div id="yellow" className="color" onClick={setCambio2}></div>
		  <div id="green" className="color" onClick={setCambio3}></div>
       

		</div>
	);
};

export default Home;
