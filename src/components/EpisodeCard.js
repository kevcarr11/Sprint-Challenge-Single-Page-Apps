import React from "react";
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

export default function EpisodeCard({ episode }){

    const {name, air_date } = episode;
    
    return (
    <div className="App p-3 bg-info my-2 rounded">
        <Toast>
            <ToastHeader>
                {name}
            </ToastHeader>
            <ToastBody>
                Date aired: <em>{air_date}</em>
            </ToastBody>
        </Toast>
    </div>
    )
}