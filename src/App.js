import React from "react";
import "./style.css";
import FilteratableProduct from "./Components/FilteratableProduct";


const PRODUCTS = [
  {price:"3000.so'm", stocked: true, name:"Shaftoli"},
   {price:"2000.so'm", stocked: true, name:"Uzum"},
    {price:"4000.so'm", stocked: true, name:"Anjir"},
     {price:"5000.so'm", stocked: true, name:"Bexi"},
      {price:"1000.so'm", stocked: true, name:"0'rik"}

] 



export default function App() {
  return (
    <div>
  <FilteratableProduct products = {PRODUCTS}/>
    </div>
  );
}
