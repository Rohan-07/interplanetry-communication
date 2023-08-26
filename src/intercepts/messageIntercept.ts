import { NextFunction, Request, Response } from "express";

export const messageIntercept = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const sender = req.header("x-sender");
	let customResponse = {};
	const oldSend = res.send;
	res.send = function (data) {
		if (sender === "mars") {
			customResponse = {
				"Response from Earth": data.message,
				"Nokia Translation": req.body.message,
			};
		} else {
			customResponse = {
				"Response from Mars": data.message,
				"Nokia Translation": req.body.message,
			};
		}
		res.send = oldSend;
		return res.send(customResponse);
	};
	next();
};
