import React, { useState } from "react";
import CarCard from "./CarCard";

const CarCategores = () => {
  const [category, setCategory] = useState([]);
  fetch("http://localhost:5000/allCarCategory")
    .then((res) => res.json())
    .then((data) => setCategory(data));
  return (
    <div className="main pl-4 pr-4 pb-20 px-4 md:px-8 lg:px-10 xl:px-40">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4  lg:grid-cols-3 xl:grid-cols-4 font-general">
        {category.map(data=><CarCard key={data._id} carData={data}></CarCard>)}
      </div>
    </div>
  );
};

export default CarCategores;
