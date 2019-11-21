import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img
                    className="imageFR"
                    src={imageUrl}
                    alt="Facial Recognition Target"
                    width="500px"
                    height="auto"
                />
            </div>
        </div>
    );
};

export default FaceRecognition;
