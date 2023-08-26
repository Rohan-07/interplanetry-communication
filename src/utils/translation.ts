const generateKeyPad = () => {
	let charToNum = new Map();
	let numToChar = new Map();

	let keypadNumber = 1;
	let numRepeat: number = 1;
	let charGroupCount: number = 3;

	for (let asciiCode = 97; asciiCode <= 122; asciiCode++) {
		// Keypad numbers that contains 3 alphabet character group
		if (
			String.fromCharCode(asciiCode) === "a" ||
			String.fromCharCode(asciiCode) === "d" ||
			String.fromCharCode(asciiCode) === "g" ||
			String.fromCharCode(asciiCode) === "j" ||
			String.fromCharCode(asciiCode) === "m" ||
			String.fromCharCode(asciiCode) === "t"
		) {
			keypadNumber++;
			charToNum.set(String.fromCharCode(asciiCode), keypadNumber.toString());
			numToChar.set(keypadNumber.toString(), String.fromCharCode(asciiCode));
			numRepeat = 1;
			charGroupCount = 3;
		} else if (
			String.fromCharCode(asciiCode) === "p" ||
			String.fromCharCode(asciiCode) === "w"
		) {
			charGroupCount = 4;
			keypadNumber++;
			numRepeat = 1;
			charToNum.set(String.fromCharCode(asciiCode), keypadNumber.toString());
			numToChar.set(keypadNumber.toString(), String.fromCharCode(asciiCode));
		} else {
			numRepeat = numRepeat >= charGroupCount ? 2 : numRepeat + 1;
			charToNum.set(
				String.fromCharCode(asciiCode),
				keypadNumber.toString().repeat(numRepeat)
			);
			numToChar.set(
				keypadNumber.toString().repeat(numRepeat),
				String.fromCharCode(asciiCode)
			);
		}
	}
	charToNum.set("+", "*");
	charToNum.set(" ", "0");
	charToNum.set("CAP", "#");

	numToChar.set("*", "+");
	numToChar.set("0", " ");
	numToChar.set("#", "CAP");

	return [charToNum, numToChar];
};

const [charToNumPad, NumToCharPad] = generateKeyPad();
export const encodeMessage = (message: string) => {
	let encodedMessage = "";
	let characters = message.split("");
	characters.forEach((ch) => {
		if (ch >= "A" && ch <= "Z") {
			encodedMessage += charToNumPad.get("CAP");
			encodedMessage += charToNumPad.get(ch.toLowerCase());
		} else if (ch >= "a" && ch <= "z") {
			encodedMessage += charToNumPad.get(ch);
		} else {
			if (charToNumPad.get(ch)) {
				encodedMessage += charToNumPad.get(ch);
			} else {
				encodedMessage += ch;
			}
		}
		encodedMessage += ".";
	});

	return encodedMessage;
};

export const decodeMessage = (message: string) => {
	let decodedMessage = "";
	let characters = message.split(".");
	characters.forEach((ch, index) => {
		if (ch.includes("#") && index + 1 <= characters.length - 1) {
			ch = ch.substring(1);
			decodedMessage += NumToCharPad.get(ch)?.toUpperCase();
		} else {
			decodedMessage += ch && NumToCharPad.get(ch);
		}
	});
	return decodedMessage;
};
