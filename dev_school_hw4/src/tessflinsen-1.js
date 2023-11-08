class VigenèreCipher {
    constructor(key, abc) {
        this.key = key;
        this.abc = abc;
    }

    encode(str) {
        let encodedString = '';
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            const keyChar = this.key[i % this.key.length];

            if (this.abc.includes(char)) {
                const charIndex = this.abc.indexOf(char);
                const keyIndex = this.abc.indexOf(keyChar);
                const encodedIndex = (charIndex + keyIndex) % this.abc.length;
                const encodedChar = this.abc[encodedIndex];
                encodedString += encodedChar;
            } else {
                encodedString += char;
            }
        }
        return encodedString;
    }

    decode(str) {
        let decodedString = '';
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            const keyChar = this.key[i % this.key.length];

            if (this.abc.includes(char)) {
                const charIndex = this.abc.indexOf(char);
                const keyIndex = this.abc.indexOf(keyChar);
                const decodedIndex = (charIndex - keyIndex + this.abc.length) % this.abc.length;
                const decodedChar = this.abc[decodedIndex];
                decodedString += decodedChar;
            } else {
                decodedString += char;
            }
        }
        return decodedString;
    }
}