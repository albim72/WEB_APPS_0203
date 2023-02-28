//callback_closure.js

function logCar(logMsg,callback){
    process.nextTick(function(){
        callback(logMsg);
    });
}

var cars = ["Ferrari","Porshe","Bugatti","Lamborgini","Aston Martin"]
var lb = ["aa","bb","vv","hh"]

for (var idx in lb){
    var message = "Widziano samochód " + lb[idx];
    logCar(message,function (){
        console.log("Normalne wywołanie zwrotne: " + message + " " + idx);
    });
}

for (var idx in lb){
    var message = "Widziano samochód " + lb[idx];
    (function (msg){
        logCar(msg,function (){
            console.log("Wywołanie zwrotne z domknięciem: " + message);
        });
    })(message);
}

var lb = ["aa","bb","vv","hh"]
for (var idx in cars) {
    var message = "Widziano samochód " + cars[idx];
    console.log(message)
    logCar(message,function (){
        console.log("Normalne wywołanie zwrotne: " + message + " " + idx);
    });
}
