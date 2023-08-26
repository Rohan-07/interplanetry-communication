import { decodeMessage, encodeMessage } from "./utils/translation";

console.log("Initializing the Earth-Mars communication");

const message1 = "houston do you copy";
const encodedMessage = encodeMessage(message1);
const decodedMessage = decodeMessage(encodedMessage);

console.log(encodedMessage);
console.log(decodedMessage);
