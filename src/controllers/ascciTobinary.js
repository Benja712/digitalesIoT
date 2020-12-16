function asciiBinary(d) {
    let codigo = '';
    switch (d) {
        case ' ':
            codigo = '00100000';
            break;
        case '!':
            codigo = '00100001';
            break;
        case '#':
            codigo = '00100011';
            break;
        case '$':
            codigo = '00100100';
            break;
        case '%':
            codigo = '00100101';
            break;
        case '&':
            codigo = '00100110';
            break;
        case '*':
            codigo = '00101010';
            break;
        case '+':
            codigo = '00101011';
            break;
        case ',':
            codigo = '00101100';
            break;
        case '-':
            codigo = '00101101';
            break;
        case '.':
            codigo = '00101110';
            break;
        case '0':
            codigo = '00110000';
            break;
        case '1':
            codigo = '00110001';
            break;
        case '2':
            codigo = '00110010';
            break;
        case '3':
            codigo = '00110011';
            break;
        case '4':
            codigo = '00110100';
            break;
        case '5':
            codigo = '00110101';
            break;
        case '6':
            codigo = '00110110';
            break;
        case '7':
            codigo = '00110111';
            break;
        case '8':
            codigo = '00111000';
            break;
        case '9':
            codigo = '00111001';
            break;
        case 'A':
            codigo = '01000001';
            break;
        case 'B':
            codigo = '01000010';
            break;
        case 'C':
            codigo = '01000011';
            break;
        case 'D':
            codigo = '01000100';
            break;
        case 'E':
            codigo = '01000101';
            break;
        case 'F':
            codigo = '01000110';
            break;
        case 'G':
            codigo = '01000111';
            break;
        case 'H':
            codigo = '01001000';
            break;
        case 'I':
            codigo = '01001001';
            break;
        case 'J':
            codigo = '01001010';
            break;
        case 'K':
            codigo = '01001011';
            break;
        case 'L':
            codigo = '01001100';
            break;
        case 'M':
            codigo = '001001101';
            break;
        case 'N':
            codigo = '01001110';
            break;
        case 'O':
            codigo = '01001111';
            break;
        case 'P':
            codigo = '01010000';
            break;
        case 'Q':
            codigo = '01010001';
            break;
        case 'R':
            codigo = '01010010';
            break;
        case 'S':
            codigo = '01010011';
            break;
        case 'T':
            codigo = '01010100';
            break;
        case 'U':
            codigo = '01010101';
            break;
        case 'V':
            codigo = '01010110';
            break;
        case 'W':
            codigo = '01010111';
            break;
        case 'X':
            codigo = '01011000';
            break;
        case 'Y':
            codigo = '01011001';
            break;
        case 'Z':
            codigo = '01011010';
            break;
        case '_':
            codigo = '01011111';
            break;
        case 'a':
            codigo = '01100001';
            break;
        case 'b':
            codigo = '01100010';
            break;
        case 'c':
            codigo = '01100011';
            break;
        case 'd':
            codigo = '01100100';
            break;
        case 'e':
            codigo = '01100101';
            break;
        case 'f':
            codigo = '01100110';
            break;
        case 'g':
            codigo = '01100111';
            break;
        case 'h':
            codigo = '01101000';
            break;
        case 'i':
            codigo = '01101001';
            break;
        case 'j':
            codigo = '01101010';
            break;
        case 'k':
            codigo = '01101011';
            break;
        case 'l':
            codigo = '01101100';
            break;
        case 'm':
            codigo = '01101101';
            break;
        case 'n':
            codigo = '01101110';
            break;
        case 'o':
            codigo = '01101111';
            break;
        case 'p':
            codigo = '01110000';
            break;
        case 'q':
            codigo = '01110001';
            break;
        case 'r':
            codigo = '01110010';
            break;
        case 's':
            codigo = '01110011';
            break;
        case 't':
            codigo = '01110100';
            break;
        case 'u':
            codigo = '01110101';
            break;
        case 'v':
            codigo = '01110110';
            break;
        case 'w':
            codigo = '01110111';
            break;
        case 'x':
            codigo = '01111000';
            break;
        case 'y':
            codigo = '01111001';
            break;
        case 'z':
            codigo = '01111010';
            break;
        default:
            codigo = '00000000';
            break;
    }
    return codigo;
}

const conversion = data => {
    let asciiCode = '';
    data.split('');
    for (let i = 0; i < data.length; i++) {
        asciiCode += asciiBinary(data[i]);
        asciiCode += '_';
    }
    return asciiCode;
}

const complete = data => {
    let string = data;
    const date = data.split('_');
    const i = date.length;
    if (i < 17) {
        for (let j = i; j <= 16; j++) {
            string += '00000000';
            string += '_';
        }
    } else if (i > 17) {
        string = '';
        for (let j = 0; j <= 15; j++) {
            string += date[j];
            string += '_';
        }
    }
    return string;
}

module.exports = {
    conversion,
    complete
}