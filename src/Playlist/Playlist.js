import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist.js';

const Playlist = () => {
    const playlist = document.getElementById("playlist");
    return (
        <div id="playlist" className={styles.playlistbox}>
            <div className={styles.tracklist}>
                <p className={styles.tracklistText}>Tracklist</p>
            <div className={styles.tracks}>{Tracklist()}</div>
            </div>
            <div className={styles.playlist}>
            <p className={styles.playlistText}>Playlist</p>
            <div className={styles.list}>   </div>
            </div>
        </div>
    );
}

export default Playlist;