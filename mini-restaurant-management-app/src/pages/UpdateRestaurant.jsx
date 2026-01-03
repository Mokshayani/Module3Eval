import {useParams} from "react-router-dom";
const UpdateRestaurant = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>Update Restaurant {id}</h2>
            <p>Restaurant ID: {id} </p>
        </div>
    );
};

export default UpdateRestaurant;
