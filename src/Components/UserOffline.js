import React from "react";
import offlineImg from "../Images/offline.png"
const UserOffline = () => {
    return(
        <div className="user-offline-container">
        <h1 className="user-offline-heading">🔴 Offline!</h1>
        <img className="offline-image" src={offlineImg} alt="Offline" />
        <p className="user-offline-message">
            Sorry, it seems that you are currently offline.
        </p>
        </div>
    );
}
export default UserOffline;