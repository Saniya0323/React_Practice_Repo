
 import React from 'react'
 
 function ListRendering() {
    const cars = ["skoda","jaguar","hyundai"]
      const carList =   cars.map((car,index) => <h3 key="index">{car}</h3>)
        
   return (
    //  <div>{cars[0]}
    //    { cars[1]}
    //    {cars[2]}
    //  </div>

    <div>
      {carList}
    </div>
   )
 }
 
 export default ListRendering