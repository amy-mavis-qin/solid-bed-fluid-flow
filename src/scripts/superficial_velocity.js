const solve = require("quadratic-equations-solver");


function superficial_velocity(pressure_drop, diameter, porosity, viscosity, density) {
    
    const A = 1.75;
    const B = (150 * (1-porosity) * viscosity) / (density * diameter);
    const C = (pressure_drop * diameter * (porosity**3)) / (3 * density * (1-porosity));

    const X = (-B + Math.sqrt((B**2)-(4*A*C)))/(2*A);
    // (-B + Math.sqrt((B**2)-(4*A*C)))/(2*A);
    const Y = (-B - Math.sqrt((B**2)-(4*A*C)))/(2*A);
    
    if (X > 0) {
        return `Superficial velocity: ${X} m/s`
    } else if (Y > 0) {
        return `Superficial velocity: ${Y} m/s`
    } else {
        return "Conditions invalid for fluid flow"
    }
}

module.exports = {
    superficial_velocity
}