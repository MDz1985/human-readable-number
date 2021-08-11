module.exports = function toReadable (number) {
    
    let thirdDigit = number % 10;
    let secondDigit = (number % 100 - thirdDigit) / 10;
    let firstDigit = Math.floor(number / 100);
    //let secondDigit = (number - firstDigit * 100 - thirdDigit) / 10;
    let a = '';
    let c = '';
    let b = '';

    switch (firstDigit){
        case 9: a = 'nine hundred';
        break;
        case 8: a = 'eight hundred';
        break;
        case 7: a = 'seven hundred';
        break;
        case 6: a = 'six hundred';
        break;
        case 5: a = 'five hundred';
        break;
        case 4: a = 'four hundred';
        break;
        case 3: a = 'three hundred';
        break;
        case 2: a = 'two hundred';
        break;
        case 1: a = 'one hundred';
        break;
        
    }
    switch (secondDigit){
        case 9: b = 'ninety';
        break;
        case 8: b = 'eighty';
        break;
        case 7: b = 'seventy';
        break;
        case 6: b = 'sixty';
        break;
        case 5: b = 'fifty';
        break;
        case 4: b = 'forty';
        break;
        case 3: b = 'thirty';
        break;
        case 2: b = 'twenty';
        break;
        
    }
    if (secondDigit === 1){
        switch (thirdDigit){
            case 9: b = 'nineteen';
            break;
            case 8: b = 'eighteen';
            break;
            case 7: b = 'seventeen';
            break;
            case 6: b = 'sixteen';
            break;
            case 5: b = 'fifteen';
            break;
            case 4: b = 'fourteen';
            break;
            case 3: b = 'thirteen';
            break;
            case 2: b = 'twelve';
            break;
            case 1: b = 'eleven';
            break;
            case 0: b = 'ten';
            break;
    
        }

    } else {
        switch (thirdDigit){
            case 9: c = 'nine';
            break;
            case 8: c = 'eight';
            break;
            case 7: c = 'seven';
            break;
            case 6: c = 'six';
            break;
            case 5: c = 'five';
            break;
            case 4: c = 'four';
            break;
            case 3: c = 'three';
            break;
            case 2: c = 'two';
            break;
            case 1: c = 'one';
            break;
        }

    }
if (number ===0) {
    c = 'zero';
}
let space1 = ' ';
let space2 = ' ';
if (firstDigit === 0 || (secondDigit === 0 && thirdDigit == 0)){
    space1 = '';
}
if (secondDigit === 0 || secondDigit === 1 || thirdDigit === 0){
    space2 = '';
}
return a + space1 + b + space2 + c;
}
