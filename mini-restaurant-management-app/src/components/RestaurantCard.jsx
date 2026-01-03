import{useNavigate}from"react-router-dom";
const RestaurantCard = ({ restaurant,isAdmin,onDelete}) => {
    const navigate=useNavigate();
    const handleUpdate=()=>{
        navigate(`/admin/restaurants/update/${restaurant.restaurantID}`);
    };
    const handleDelete=()=>{
        onDelete(restaurant.restaurantID);
    };
    return (
        <div style={styles.card}>
            <img src={restaurant.image} alt={restaurant.name} style={styles.image} />
            <h3>{restaurant.name}</h3>
            <p>Address: {restaurant.address}</p>
            <p>Type: {restaurant.type}</p>
            <p>Parking Lot: {restaurant.parkingLot ? "Available" : "Not Available"}</p>
            {isAdmin && (<button onClick={handleUpdate}>Update Restaurant</button>)}
            {isAdmin && (<button onClick={handleDelete}>Delete Restaurant</button>)}
        </div>
    );
}

const styles = {
    card: {
        border: "1px solid #ccc",
        padding: "16px",
        margin: "16px",
        borderRadius: "8px",
    },
    image: {
        width: "100%",
        height: "150px",
        objectFit: "cover",
    },
    button: {
        marginTop: "8px",
        padding: "8px 16px",
        backgroundColor: "#28a745",
        cursor: "pointer",
    },
    deleteButton: {
        marginTop: "8px",
        padding: "8px 16px",
        cursor: "pointer",
        backgroundColor: "#dc3545",
    },
};


export default RestaurantCard;