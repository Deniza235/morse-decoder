const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let newDecodeMorse = [];
    let decodeWords =  [];
    let resultDecode = '';
    
    for(let i = 0; i < expr.length; i += 10) {
        newDecodeMorse.push(expr.slice(i, i + 10));
    }

    for(let elem of newDecodeMorse) {
        let words = [];
        if(elem === '**********') {
            words.push(' ');
        } else {
            for(let i = 0; i < elem.length; i += 2) {
                el = elem.slice(i, i + 2);
                if (el === '10') {
                    words.push('.')
                } else if(el === '11') {
                    words.push('-');
                }
                
            }
        }
        decodeWords.push(words.join(''));
        
    }

    for(let el of decodeWords) {
        if( el === ' ') {
            resultDecode += ' ';
        } else {
            resultDecode += MORSE_TABLE[el];
        }
    }

    return resultDecode;
    
    
}

module.exports = {
    decode
}