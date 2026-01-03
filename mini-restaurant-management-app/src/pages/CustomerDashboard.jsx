import {useEffect, useState} from "react";
import {getRestaurants} from "../utils/localStorage.js";
import RestaurantCard from "../components/RestaurantCard.jsx";
const CustomerDashboard = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        setRestaurants(getRestaurants());
    }, []);
    return (
        <div>
            <h2>Customer Dashboard</h2>
            <div style={styles.container}>
            {restaurants.map((item) => (
                <RestaurantCard key={item.restaurantid} restaurant={item} isAdmin={false}/>
            ))}
        </div>
        </div>
    );
};

export default CustomerDashboard;