const obj = {
    "distance": { "unit": "mm", "value": 3 },
    "convert_to": "km",
}

let ft;
let mm;
let m;
let cm;
let inch;
let km;
let yard;

const unitIn = obj.distance.unit;
const valueIn = obj.distance.value;
const convertTo = obj.convert_to;

let unit;
let value;

function convertFrom() {
    unit = convertTo;

    if (unitIn === 'm') {
        switch (convertTo) {
            case "ft":
                value = valueIn * 3.28;
                break;
            case "mm":
                value = valueIn * 1000;
                break;
            case "cm":
                value = valueIn * 100;
                break;
            case "in":
                value = valueIn * 39.37;
                break;
            case "km":
                value = valueIn * 0.001;
                break;
            case "yd":
                value = valueIn * 1.09;
                break;
        }
    } else if (unitIn === 'ft') {
        switch (convertTo) {
            case "m":
                value = valueIn * 0.31;
                break;
            case "mm":
                value = valueIn * 304.8;
                break;
            case "cm":
                value = valueIn * 30.48;
                break;
            case "in":
                value = valueIn * 12;
                break;
            case "km":
                value = valueIn * 0.0031;
                break;
            case "yd":
                value = valueIn * 0.33;
                break;
        }
    } else if (unitIn === 'mm') {
        switch (convertTo) {
            case "m":
                value = valueIn * 0.001;
                break;
            case "ft":
                value = valueIn * 0.0033;
                break;
            case "cm":
                value = valueIn * 0.1;
                break;
            case "in":
                value = valueIn * 0.039;
                break;
            case "km":
                value = valueIn * 0.000001;
                break;
            case "yd":
                value = valueIn * 0.0011;
                break;
        }
    } else if (unitIn === 'cm') {
        switch (convertTo) {
            case "m":
                value = valueIn * 0.01;
                break;
            case "ft":
                value = valueIn * 0.033;
                break;
            case "mm":
                value = valueIn * 10;
                break;
            case "in":
                value = valueIn * 0.39;
                break;
            case "km":
                value = valueIn * 0.00001;
                break;
            case "yd":
                value = valueIn * 0.011;
                break;
        }
    } else if (unitIn === 'in') {
        switch (convertTo) {
            case "m":
                value = valueIn * 0.0254;
                break;
            case "ft":
                value = valueIn * 0.083;
                break;
            case "mm":
                value = valueIn * 254;
                break;
            case "cm":
                value = valueIn * 25.4;
                break;
            case "km":
                value = valueIn * 0.0000254;
                break;
            case "yd":
                value = valueIn * 0.028;
                break;
        }
    } else if (unitIn === 'km') {
        switch (convertTo) {
            case "m":
                value = valueIn * 1000;
                break;
            case "ft":
                value = valueIn * 3280.8;
                break;
            case "mm":
                value = valueIn * 1000000;
                break;
            case "cm":
                value = valueIn * 100000;
                break;
            case "in":
                value = valueIn * 39370;
                break;
            case "yd":
                value = valueIn * 1093.6;
                break;
        }
    } else if (unitIn === 'yd') {
        switch (convertTo) {
            case "m":
                value = valueIn * 0.91;
                break;
            case "ft":
                value = valueIn * 3;
                break;
            case "mm":
                value = valueIn * 914;
                break;
            case "cm":
                value = valueIn * 91.4;
                break;
            case "in":
                value = valueIn * 36;
                break;
            case "km":
                value = valueIn * 0.00091;
                break;
        }
    }


    const result = { unit, value }
    return result;
}

function meters(val) {
    ft = val * 3.28;
    mm = val * 1000;
    cm = val * 100;
    inch = val * 39.37;
    km = val * 0.001;
    yard = val * 1.09;
    return { ft, mm, cm, inch, km, yard }
}

function feet(val) {
    m = val * 0.31;
    mm = val * 304.8;
    cm = val * 30.48;
    inch = val * 12;
    km = val * 0.00031;
    yard = val * 0.33;
    return { m, mm, cm, inch, km, yard }
}

function millimeters(val) {
    m = val * 0.001;
    ft = val * 0.0033;
    cm = val * 0.1;
    inch = val * 0.039;
    km = val * 0.000001;
    yard = val * 0.0011;
}

function centimeters(val) {
    m = val * 0.01;
    ft = val * 0.033;
    mm = val * 10;
    inch = val * 0.39;
    km = val * 0.00001;
    yard = val * 0.011;
}

function inches(val) {
    m = val * 0.0254;
    mm = val * 25.4;
    cm = val * 2.54;
    ft = val * 0.083;
    km = val * 0.0000254;
    yard = val * 0.028;
}

function kilometers(val) {
    m = val * 1000;
    mm = val * 1000000;
    cm = val * 100000;
    inch = val * 39370;
    ft = val * 3280.8;
    yard = val * 1093.6;
}

function yards(val) {
    m = val * 0.91;
    mm = val * 914;
    cm = val * 91.4;
    inch = val * 36;
    km = val * 0.00091;
    ft = val * 3;
}

// function convertToOthers(convertFrom, value) {
//     switch (convertFrom) {
//         case "m":
//             meters((value));
//             break;
//         case "ft":
//             feet((value));
//             break;
//         case "mm":
//             millimeters((value));
//             break;
//         case "cm":
//             centimeters((value));
//             break;
//         case "in":
//             inches((value));
//             break;
//         case "km":
//             kilometers((value));
//             break;
//         case "yd":
//             yards((value));
//             break;
//     }
// }

console.log(convertFrom())