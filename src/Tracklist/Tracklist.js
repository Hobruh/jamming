import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './Tracklist.module.css';


const Tracklist = () => {
    const tracklist = document.getElementById("tracklist");
    return (
        <div id='tracklist' className={styles.tracklistBox}>
            <div className={styles.tracklist}>
            <p>Tracklist</p>
            </div>
        </div>  
    );
}


export default Tracklist;