import React from "react";
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

export default function EpisodeCard({ episode }){

    const {name, air_date, characters } = episode;
    
    return (
    <div className="App p-3 bg-info my-2 rounded">
        <Toast>
            <ToastHeader>
                <h3>{name}</h3>
            </ToastHeader>
            <ToastBody>
                <h5>Date aired: <em>{air_date}</em></h5>
                <h5><em>{characters.length}</em> Characters</h5> 
            </ToastBody>
        </Toast>
    </div>
    )
}