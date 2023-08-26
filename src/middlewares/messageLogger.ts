import { Request, Response, NextFunction } from "express";
import { createLogger, transports, format } from "winston";
const mylogger = createLogger({
	format: format.combine(format.timestamp(), format.json()),
	transports: [
		new transports.Console(),
		new transports.File({ filename: "combined.log" }),
	],
});

export const messageLogger = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const sender = req.header("x-sender") ?? "";
	const receiver = req.header("x-receiver") ?? "";
	const startTime = Date.now();
	mylogger.info(`Sender is ${sender} and Receiver is ${receiver}`);
	next();
	const endTime = Date.now();
	const processingTime = endTime - startTime;
	mylogger.info(`Translation completed in: ${processingTime}ms`);
};
