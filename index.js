// Variable declaration

let packing_diameter_slider = document.getElementById('packing_diameter')
let packing_diameter_data = document.getElementById('packing_diameter_data')
packing_diameter_data.innerHTML = packing_diameter_slider.value
packing_diameter_slider.oninput = function() {
    packing_diameter_data.innerHTML = this.value
}

let dynamic_viscosity_slider = document.getElementById('dynamic_viscosity')
let dynamic_viscosity_data = document.getElementById('dynamic_viscosity_data')
dynamic_viscosity_data.innerHTML = dynamic_viscosity_slider.value
dynamic_viscosity_slider.oninput = function() {
    dynamic_viscosity_data.innerHTML = this.value
}

let porosity_slider = document.getElementById('porosity')
let porosity_data = document.getElementById('porosity_data')
porosity_data.innerHTML = porosity.value
porosity_slider.oninput = function() {
    porosity_data.innerHTML = this.value
}

let density_slider = document.getElementById('density')
let density_data = document.getElementById('density_data')
density_data.innerHTML = density_slider.value
density_slider.oninput = function() {
    density_data.innerHTML = this.value
}

let reynolds_number_slider = document.getElementById('reynolds_number')
let reynolds_number_data = document.getElementById('reynolds_number_data')
reynolds_number_data.innerHTML = reynolds_number_slider.value
reynolds_number_slider.oninput = function() {
    reynolds_number_data.innerHTML = this.value
}

let pressure_drop_slider = document.getElementById('pressure_drop')
let pressure_drop_data = document.getElementById('pressure_drop_data')
pressure_drop_data.innerHTML = pressure_drop_slider.value
pressure_drop_slider.oninput = function() {
    pressure_drop_data.innerHTML = this.value
}


let particle_radius = 1

let bed_length = 1

