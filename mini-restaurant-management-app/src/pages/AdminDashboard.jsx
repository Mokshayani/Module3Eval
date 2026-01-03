import { useEffect,useState } from "react";
import { getRestaurants } from "../utils/localStorage.js";
import RestaurantCard from "../components/RestaurantCard.jsx";

const AdminDashboard = () => {
    const [restaurants,setRestaurants]=useState([]);
    useEffect(()=>{
        setRestaurants(getRestaurants());
    },[]);
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <div style={styles.container}>
                {restaurants.map((item)=>(
                    <RestaurantCard key={item.restaurantid} restaurant={item} isAdmin={true} />
                ))}
        </div>
        </div>
    );
    };

export default AdminDashboard;