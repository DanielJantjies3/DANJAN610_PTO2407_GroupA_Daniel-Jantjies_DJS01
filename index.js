/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)



//Unit Conversion (Velocity from km/h to m/s)
const velInMs = vel * (1000 / 3600); 


//Calculate New Velocity with Unit Conversion (m/s)
const calcNewVel = (velInMs, acc, time) => {
  return velInMs + (acc * time);   //velocity after acceleration
};


//Calculate New Distance With Unit Conversion (Meters) 
//Kinematic Equation for Calculating Distance : d = v0 * t + 0.5 * a * t^2
const calcNewDistance = (velInMs, acc, time) => {
  return (velInMs * time) + (0.5 * acc * Math.pow(time, 2));
};


//Calculate Remaining Fuel
const calcRemainingFuel = (fuel , fbr , time) => {
  return fuel - (fbr * time);
};


// Convert New Distance to Kilometers
const newDistanceInKm = calcNewDistance(velInMs, acc, time)/1000; 

//Calculate New Velocity in m/s
const newVelInMs = calcNewVel(velInMs, acc, time);

//New Velocity Unit Conversion (m/s to Km/h)
const newVelInKmH = newVelInMs * (3600/1000);

//Calculate Remaining Fuel After one Hour
const remainingFuel = calcRemainingFuel(fuel, fbr, time);


//Output Results
console.log(`Corrected New Velocity: ${newVelInKmH.toFixed(2)} km/h`); //48880 km/h after correction
console.log(`Corrected New Distance: ${newDistanceInKm.toFixed(2)} km`); //10000 km after correction.
console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`); //3,200 kg after correction.


//Error Handling
if (acc > 20) {
  throw new Error('Acceleration too high. Ensure the unit of measurement is in m/s^2!');
}

if (vel > 30000) {
  throw new Error ('Velocity too high. Ensure the unit of measurement is in km/h!');
}

