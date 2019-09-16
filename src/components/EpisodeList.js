import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/episode/")
        .then(res => {
            setEpisodes(res.data.results)
        })
        .catch(err=> console.log(err))
    }, []);

    return (
        <div>
        <header>
            <h1 className="text-info">LIST OF EPISODES</h1>
        </header>
            <section className="App">
                {episodes.map(episode => (
                <EpisodeCard episode={episode} key={episode.id} />
                ))}
            </section>
        </div>
    )
}