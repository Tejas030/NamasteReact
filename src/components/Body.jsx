import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restaurantList from "../utils/mockData";
const Body = () => {
  const [resList , setResList] = useState(restaurantList); //This is Array Destrucuturing....
  return (
    <div className="body">
      <div className="filter-btn">
        <button
         onClick = {()=> {
          const filteredRestaurants = resList.filter(restaurant => restaurant.rating > 4.5);
          setResList(filteredRestaurants);
         }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-list">
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            image={restaurant.image}
            rating={restaurant.rating}
            deliveryTime={restaurant.deliveryTime}
            cuisines={restaurant.cuisines.join(", ")}
            costForTwo={restaurant.costForTwo}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
