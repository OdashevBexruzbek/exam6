// import Card from "./Card"

// function Home() {
//   const {
//     data: products,
//     isPending,
//     error,
//   } = useFetch("https://dummyjson.com/products");

//   return (
//     <div>
//       <div className="align-content">
//         <h1 className="text-3xl text-center mb-4">All Products</h1>
//         {isPending && <h3 className=" text-xl  text-center">Loading...</h3>}
//         <Card/>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React, { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { useNavigate } from "react-router-dom";

function Home() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("recipes");
    if (data) {
      setCard(JSON.parse(data));
    }
  }, []);

  return (
    <div className="align-content">
      <h1 className="font-bold mb-3">Recipe</h1>
      {card.length > 0 ? (
        card.map((element, index) => {
          return <Cart data={element} key={index}></Cart>;
        })
      ) : (
        <p>No recipe</p>
      )}
    </div>
  );
}

export default Home;
