import React from "react";
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

export default function EpisodeCard({ episode }){

    const {name, air_date } = episode;
    console.log(episode)

    return (
    <div className="p-3 my-2 rounded">
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