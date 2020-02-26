module.exports = function toReadable (number) {
    number = number.toString();
    const oneDigits = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };
    const twoDigits = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty'
    };
    const decimals = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };
    if ([...number].length === 1) {
        return oneDigits[Number(number)];
    } else if ([...number].length === 2 && number <=20) {
        return twoDigits[Number(number)];
    } else if ([...number].length === 2 && number <=99) {
        if ([...number][1] === '0') {
            return decimals[Number(number[0])];
        } else {
            return decimals[parseInt([...number][0])] + ' ' + oneDigits[parseInt([...number][1])];
        }
    }
    if ([...number].length === 3) {
        let decimalPart = parseInt([...number][1] + [...number][2]);
        if (decimalPart <= 20 && number[1] !== '0' && number[2] !== '0') {
            return oneDigits[parseInt([...number][0])] + ' hundred ' + twoDigits[decimalPart];
        } else if (number[1] ==='0' && number[2] ==='0') {
            return oneDigits[parseInt([...number][0])] + ' hundred';
        } else if (number[1] ==='0') {
            return oneDigits[parseInt([...number][0])] + ' hundred ' + oneDigits[Number(number[2])];
        } else if (number[2] ==='0') {
            return oneDigits[parseInt([...number][0])] + ' hundred ' + decimals[Number(number[1])];
        } else {
            return oneDigits[parseInt([...number][0])] + ' hundred ' + decimals[parseInt([...number][1])] + ' ' +
                oneDigits[parseInt([...number][2])];
        }
    }
};
