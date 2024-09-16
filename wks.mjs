//#region Task A
console.log("Task A:");

const HOURS_A_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;

let waterJuiceRatio = 3;
let daysUntilBirthday = 7;
let millimetersOfRain = 5;

console.log(HOURS_A_DAY);
console.log(MINUTES_IN_HOUR);
console.log(SECONDS_IN_MINUTE);
console.log(waterJuiceRatio);
console.log(daysUntilBirthday);
console.log(millimetersOfRain);
//#endregion
addSpacing(1);
//#region Task B
console.log("Task B:");

const secondsIn2_5hours = MINUTES_IN_HOUR * SECONDS_IN_MINUTE *2.5;
const minutesIn123Days = HOURS_A_DAY * MINUTES_IN_HOUR * 123;

console.log(secondsIn2_5hours);
console.log(minutesIn123Days);
//#endregion
addSpacing(1);
//#region Task C
console.log("Task C:");

for (let i=1; i <= 10; i++) {
    console.log(i);
}
//#endregion
addSpacing(1);
//#region Task D
console.log("Task D:");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}
//#endregion
addSpacing(1);
//#region Task E
console.log("Task E:");

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}
//#endregion
addSpacing(1);
//#region Task F
console.log("Task F:")

let i = 0;
while (i <= 100) {
    console.log(i);
    i++;
}
//#endregion
addSpacing(1);

//#region Util Functions
function addSpacing(lines = 1) {
    for (let i = 0; i < lines; i++){
        console.log("")
    }
}
//#endregion