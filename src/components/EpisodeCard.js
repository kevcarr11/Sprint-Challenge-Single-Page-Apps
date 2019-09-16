import React from "react";

export default function EpisodeCard({ episode }){

    const {name, air_date } = episode;
    console.log(episode)

    return (
        <div className="card">
            <h2>{name}</h2>
            {air_date}
            
            


            
        </div>
    )
}