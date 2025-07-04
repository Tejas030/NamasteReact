const RestaurantCard = (props) => {
  const { name, image, rating, deliveryTime, cuisines, costForTwo } = props;
  return (
    <div className="restaurant-card">
      <img className="restaurant-logo" src={image} alt="" />
      <h4>{name}</h4>
      <h4>{cuisines} </h4>
      <h5>Rating : {rating}</h5>
      <h5>{costForTwo}</h5>
      <h5>Delivery Time : {deliveryTime}</h5>
    </div>
  );
};

export default RestaurantCard;
