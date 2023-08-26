import { Response, Request } from "express";
import { decodeMessage, encodeMessage } from "../utils/translation";

export const messageController = (req: Request, res: Response) => {
	const sender = req.header("x-sender")?.toLowerCase();
	let result = "";
	if (sender === "earth") {
		result = encodeMessage(req.body.message);
	} else if (sender === "mars") {
		result = decodeMessage(req.body.message);
	} else {
		result = "Invalid Header check sender header";
		res.status(400);
	}
	res.send({ message: result });
};
