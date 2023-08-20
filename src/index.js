const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const devider = 10;
    const devidedArr = [];
    const subDiv = 2
    let output = ''

    // перебераем строку, убираем пробелы и создаем массив с данными
    for (let i = 0; i < expr.length; i += devider) {
        let item = expr.slice(i, i + devider);
        if (item == "**********") {
            item = " "
            devidedArr.push(item)
        } else {
            devidedArr.push(item)
        }
    }
    // перебараем массив
    for (let itter = 0; itter < devidedArr.length; itter++) {
        // получаем элемент массива
        let word = devidedArr[itter]
        let readyToOutput = ''

        if (word != ' ') {
            for (let q = 0; q < word.length; q += subDiv) {
                let pair = word.slice(q, q + subDiv)
                if (pair == '10') {
                    readyToOutput += '.'
                } else if (pair == '11') {
                    readyToOutput += '-'
                }
            }
        }
        if (word == ' ') {
            output += ' '
        } else {
            output += MORSE_TABLE[readyToOutput]
        }
    }
    return output
}

module.exports = {
    decode
}

