const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class VigenereCipheringMachine {

    constructor(isDirect) {
        this.direct = isDirect ?? true;
    }

    encrypt(message, key) {
        this.validateParameters(message, key);
        let result = [];
        let spacesCount = 0;
        for (let i = 0; i < message.length; i++) {
            const m = message[i].toUpperCase();
            const k = key[(i - spacesCount) % key.length].toUpperCase();
            let c = m;
            const mIndex = ALPHABET.indexOf(m);
            if (mIndex >= 0) {
                const kIndex = ALPHABET.indexOf(k);
                if (kIndex < 0) {
                    throw new Error('Key must contain only latin letters');
                }
                c = ALPHABET[(mIndex + kIndex) % 26];
            } else if (m == ' ') {
                spacesCount++;
            }
            result.push(c);
        }
        if (!this.direct) {
            result.reverse();
        }
        return result.join('');
    }

    decrypt(cipher, key) {
        this.validateParameters(cipher, key);
        let result = [];
        let spacesCount = 0;
        for (let i = 0; i < cipher.length; i++) {
            const c = cipher[i].toUpperCase();
            const k = key[(i - spacesCount) % key.length].toUpperCase();
            let m = c;
            const cIndex = ALPHABET.indexOf(c);
            if (cIndex >= 0) {
                const kIndex = ALPHABET.indexOf(k);
                if (kIndex < 0) {
                    throw Error('Key must contain only latin letters');
                }
                m = ALPHABET[(cIndex - kIndex + 26) % 26];
            } else if (c == ' ') {
                spacesCount++;
            }
            result.push(m);
        }
        if (!this.direct) {
            result.reverse();
        }
        return result.join('');
    }

    validateParameters(parameter1, parameter2) {
        if (!parameter1 || !parameter2) {
            throw new Error('Both parameters are mandatory');
        }
    }
}

module.exports = VigenereCipheringMachine;
