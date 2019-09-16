import React from "react";
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

export default function CharacterCard({ character }) {
  
  const {image, name, species, status, location, origin } = character;
  return (
    <div className="card p-3 bg-info my-2 rounded">
      <Toast>
        <ToastHeader>
          <img src={image} alt="character pic" />
        </ToastHeader>
        <ToastBody>
          <h2>{name}</h2>
          Species: <em>{species}</em>
          <br/>
          Status: <em>{status}</em>
          <p>Location: {location.name}</p>
          <br/>
          <p>Origin: {origin.name}</p>
        </ToastBody>
      </Toast>
    </div>
  );
}
