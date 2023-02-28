//callback_chain.js

function logCar(car,callback){
    console.log("Widziano samochód %s",car);
    if(cars.length){
        process.nextTick(function (){
            callback();
        });
    }
}

function logCars(cars){
    var car =cars.pop();
    logCar(car,function (){
        logCars(cars);
    })
}

var cars = ["Ferrari","Porshe","Bugatti","Lamborgini","Aston Martin"]
logCars(cars);
