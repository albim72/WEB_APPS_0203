//callback_parameter.js

var events = require('events');
function CarShow(){
    events.EventEmitter.call(this);
        this.seeCar = function (make){
            this.emit('sawCar',make);
    };
}

CarShow.prototype.__proto__ = events.EventEmitter.prototype;
var show = new CarShow();
function logCar(make){
    console.log("Widziano samochód. Marka: " + make);
}

function logColorCar(make,color){
    console.log("Widziano samochód. Kolor: %s. Marka %s.",color,make);
}

show.on("sawCar",logCar)
show.on("sawCar",function (make){
    var colors = ['czarny','czerwony','srebrny'];
    var color = colors[Math.floor(Math.random()*3)];
    logColorCar(make,color);
});

show.seeCar("Ferrari");
show.seeCar("Porshe");
show.seeCar("Lexus");
show.seeCar("Aston Martin");
show.seeCar("BMW");
