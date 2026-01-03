import {useEffect,useRef} from "react";
const Navbar=({search,
    setSearch,
    type,
    setType,
    parking,
    setParking,
})=>{
    const searchRef=useRef(null);
    useEffect(()=>{
        searchRef.current.focus();
    },[]);
    return(
        <div style={styles.navbar}>
            <input
                ref={searchRef}
                type="text"
                placeholder="Search Restaurants"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                style={styles.input}/>
            <select value={type} onChange={(e)=>setType(e.target.value)} style={styles.select}>
                <option value="">All Types</option>
                <option value="Rajasthani">Rajasthani</option>
                <option value="Gujarati">Gujarati</option>
                <option value="Mughlai">Mughlai</option>
                <option value="Thai">Thai</option>
                <option value="North Indian">North Indian</option>
                <option value="Jain">Jain</option>
                <option value="South Indian">South Indian</option>
            </select>
            <select value={parking} onChange={(e)=>setParking(e.target.value)} style={styles.select}>
                <option value="">All</option>
                <option value="available">Parking Available</option>
                <option value="not available">No Parking</option>
            </select>
        </div>
    );
};

const styles={
    navbar:{
        display:"flex",
        justifyContent:"space-around",
        gap:"10px",
        padding:"10px",
    },
    input:{
        padding:"8px",
        width:"40%",
    },
    select:{
        padding:"8px",
    },
};

export default Navbar;
