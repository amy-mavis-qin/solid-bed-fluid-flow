import React, { useRef, useState, Component } from 'react';
import './style.css';
import { Canvas } from '@react-three/fiber';
import { superficial_velocity } from '../../scripts/superficial_velocity';


export default function Simulation() {
    const [packing_diameter, set_packing_diameter] = useState(0.05);
    const [porosity, set_porosity] = useState(0.5);
    const [dynamic_viscosity, set_dynamic_viscosity] = useState(0.000155);
    const [density, set_density] = useState(2.05);
    const [pressure_drop, set_pressure_drop] = useState(-100000);
    const [velocity, set_velocity] = useState("Change any slider to calculate superficial velocity");
    const [speed, set_speed] = useState(0.001);
    const [button, set_button] = useState("Start Simulation");
    const [clicked, set_clicked] = useState("not_clicked");

    function handleVelocity (pressure_drop, packing_diameter, porosity, dynamic_viscosity, density) {
        let v = superficial_velocity(pressure_drop, packing_diameter, porosity, dynamic_viscosity, density);
        set_velocity(v);
    }

    function handleButton (button) {
        if (button == "Start Simulation") {
            set_button("End Simulation");
        } else {
            set_button("Start Simulation");
        }
    }

    function handleClick (clicked) {
        if (clicked == "clicked") {
            set_clicked("not_clicked");
        } else if (clicked == "not_clicked") {
            set_clicked("clicked");
        }
    }

    return(
        <div>
            <div className="side_panel">
                <div className="title_container">
                    <h2>Fluid flow past bed of solids simulation</h2>
                    <h4>By Amy Qin</h4>
                    <p id="velocity">{velocity}</p>    
                </div>
                <div className="slider_container">
                    <p className="label">Porosity: </p>
                    <p id="porosity_data" className="label">{porosity}</p>
                    <br />
                    <input type="range" min="0" max="1" value={porosity} step="0.01" className="slider" id="porosity" onChange={(e) => {set_porosity(e.target.value); handleVelocity(pressure_drop, packing_diameter, porosity, dynamic_viscosity, density)}}></input>
                    <br />
                    <p className="label">Packing diameter: </p>
                    <p id="packing_diameter_data" className="label">{packing_diameter}</p>
                    <p className="label"> nm</p>
                    <br />
                    <input type="range" min="0" max="0.1" value={packing_diameter} className="slider" step="0.001" id="packing_diameter" onChange={(e) => {set_packing_diameter(e.target.value); handleVelocity(pressure_drop, packing_diameter, porosity, dynamic_viscosity, density)}}></input>
                    <br />
                    <p className="label">Dynamic Viscosity: </p>
                    <p id="dynamic_viscosity_data" className="label">{dynamic_viscosity}</p>
                    <p className="label"> kg/m*s</p>
                    <br />
                    <input type="range" min="0.00001" max="0.0003" value={dynamic_viscosity} step="0.000005" className="slider" id="dynamic_viscosity" onChange={(e) => {set_dynamic_viscosity(e.target.value); handleVelocity(pressure_drop, packing_diameter, porosity, dynamic_viscosity, density)}}></input>
                    <br />
                    <p className="label">Density: </p>
                    <p id="density_data" className="label">{density}</p>
                    <p className="label"> kg/m^3</p>
                    <br />
                    <input type="range" min="0.1" max="4" value={density} step="0.01" className="slider" id="density" onChange={(e) => {set_density(e.target.value); handleVelocity(pressure_drop, packing_diameter, porosity, dynamic_viscosity, density)}}></input>
                    <br />
                    <p className="label">Pressure drop: </p>
                    <p id="pressure_drop_data" className="label">{pressure_drop}</p>
                    <p className="label"> kg/m*s^2</p>
                    <br />
                    <input type="range" min="-200000" max="0" value={pressure_drop} step="100" className="slider" id="pressure_drop" onChange={(e) => {set_pressure_drop(e.target.value); handleVelocity(pressure_drop, packing_diameter, porosity, dynamic_viscosity, density)}}></input>
                    <br />
                    <p className="label">Simulation speed: </p>
                    <p id="speed" className="label">{speed}</p>
                    <p className="label"> x</p>
                    <br />
                    <input type="range" min="0" max="1" value={speed} step="0.0001" className="slider" id="speed" onChange={(e) => {set_speed(e.target.value)}}></input>
                    <br />
                    <button type="button" className={clicked} onClick={(e) => {handleButton(button); handleClick(clicked)}}>{button}</button>
                </div>
            </div>
            <div className="main">
                <Canvas className="canvas" diameter={packing_diameter} velocity={velocity} click={clicked} speed={speed}>
                    <pointLight position={[10, 10, 10]} />
                    <Box position={[1.2, 0, 0]} />
                </Canvas>
            </div>
        </div>
    )    
}
