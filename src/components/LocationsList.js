import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [locations, setLocation] = useState([])

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location/")
        .then(res => {
            setLocation(res.data.results)
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
        <header>
            <h1 className="text-info">LOCATIONS FEATURED IN THE SHOW</h1>
        </header>
        <section className="character-list grid-view">
            {locations.map(location => (
                <LocationCard location={location} key={location.id} />
            ))}
        </section>
        </div>
    )
}
