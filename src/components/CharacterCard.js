import React from "react";

export default function CharacterCard({ character }) {
  
  const {image, name, species, status, location, origin } = character;
  return (
    <div className="card">
      <img src={image} alt="character pic" />
      <h2>{name}</h2>
      <p>{species}</p><p>{status}</p>
      <br/>
      <p>Location: {location.name}</p>
      <br/>
      <p>Origin: {origin.name}</p>
      <h3>Episodes</h3>

      {/* {props.character.episode.map(item => (
        <div className="episodes" key={item}>
          {item}
        </div>
      ))} */}
    

    </div>
  );
}
