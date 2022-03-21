import React, { Component } from 'react';
import './style.css';
import Canvas from './Canvas.js';
import { superficial_velocity } from '../../scripts/superficial_velocity.js';

const drawSolid = (ctx, radius, x, y) => {
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2*Math.PI)
    ctx.fill()
}

class Simulation extends Component{
    constructor(props){
        super(props)
        this.state = {
            packing_diameter: 0.05,
            porosity: 0.5,
            dynamic_viscosity: 0.000155,
            density: 2.05,
            pressure_drop: -100000,
            velocity:""
        }
        this.handleInputChange=this.handleInputChange.bind(this)
    }
    handleInputChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }
    render() {
        return(
            <div>
                <div className="main">
                    <Canvas className="canvas" radius={this.state.packing_diameter}></Canvas>
                    <p>{superficial_velocity(this.state.pressure_drop, this.state.packing_diameter, this.state.porosity, this.state.dynamic_viscosity, this.state.density, this.state.reynolds_number)}</p>    
                </div>

                <div className="side_panel">
                    <div className="title_container">
                        <h2>Fluid flow past bed of solids simulation</h2>
                        <h4>By Amy Qin</h4>
                    </div>
                    <div className="slider_container">
                        <p className="label">Porosity: </p>
                        <p id="porosity_data" className="label">{this.state.porosity}</p>
                        <br />
                        <input type="range" min="0" max="1" value={this.state.value} step="0.01" className="slider" id="porosity" onChange={this.handleInputChange.bind(this, "porosity")}></input>
                        <br />
                        <p className="label">Packing diameter: </p>
                        <p id="packing_diameter_data" className="label">{this.state.packing_diameter}</p>
                        <p className="label"> m</p>
                        <br />
                        <input type="range" min="0" max="0.1" value={this.state.value} className="slider" step="0.001" id="packing_diameter" onChange={this.handleInputChange.bind(this, "packing_diameter")}></input>
                        <br />
                        <p className="label">Dynamic Viscosity: </p>
                        <p id="dynamic_viscosity_data" className="label">{this.state.dynamic_viscosity}</p>
                        <p className="label"> kg/m*s</p>
                        <br />
                        <input type="range" min="0.00001" max="0.0003" value={this.state.value} step="0.000005" className="slider" id="dynamic_viscosity" onChange={this.handleInputChange.bind(this, "dynamic_viscosity")}></input>
                        <br />
                        <p className="label">Density: </p>
                        <p id="density_data" className="label">{this.state.density}</p>
                        <p className="label"> kg/m^3</p>
                        <br />
                        <input type="range" min="0.1" max="4" value={this.state.value} step="0.01" className="slider" id="density" onChange={this.handleInputChange.bind(this, "density")}></input>
                        <br />
                        <p className="label">Pressure drop: </p>
                        <p id="pressure_drop_data" className="label">{this.state.pressure_drop}</p>
                        <p className="label"> kg/m*s^2</p>
                        <br />
                        <input type="range" min="-200000" max="0" value={this.state.value} step="100" className="slider" id="pressure_drop" onChange={this.handleInputChange.bind(this, "pressure_drop")}></input>
                    </div>
                </div>
            </div>
        )    
    }
}
 
export default Simulation;