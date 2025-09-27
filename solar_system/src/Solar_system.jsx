import React from "react";
import "./Solar_system.css";

export default function SolarSystem() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Solar System Background */}
      <div className="universe">
        <div className="sun"></div>

        <div className="orbit" style={{ "--radius": "90px", "--duration": "7s" }}>
          <div className="planet mercury" style={{ "--radius": "90px", "--size": "12px" }}></div>
        </div>
        <div className="orbit" style={{ "--radius": "135px", "--duration": "12s" }}>
          <div className="planet venus" style={{ "--radius": "135px", "--size": "18px" }}></div>
        </div>
        <div className="orbit" style={{ "--radius": "185px", "--duration": "18s" }}>
          <div className="planet earth" style={{ "--radius": "185px", "--size": "20px" }}></div>
        </div>
        <div className="orbit" style={{ "--radius": "230px", "--duration": "28s" }}>
          <div className="planet mars" style={{ "--radius": "230px", "--size": "16px" }}></div>
        </div>
        <div className="orbit" style={{ "--radius": "300px", "--duration": "40s" }}>
          <div className="planet jupiter" style={{ "--radius": "300px", "--size": "34px" }}></div>
        </div>
        <div className="orbit" style={{ "--radius": "370px", "--duration": "64s" }}>
          <div className="planet saturn" style={{ "--radius": "370px", "--size": "30px" }}></div>
        </div>
        <div className="orbit" style={{ "--radius": "430px", "--duration": "92s" }}>
          <div className="planet uranus" style={{ "--radius": "430px", "--size": "24px" }}></div>
        </div>
        <div className="orbit" style={{ "--radius": "490px", "--duration": "140s" }}>
          <div className="planet neptune" style={{ "--radius": "490px", "--size": "24px" }}></div>
        </div>
      </div>
    </div>
  );
}
