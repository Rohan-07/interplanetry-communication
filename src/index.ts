import express from "express";
import bodyParser from "body-parser";
import { messageController } from "./controllers/messageController";
import { messageLogger } from "./middlewares/messageLogger";
import { messageIntercept } from "./intercepts/messageIntercept";

const app = express();
const port = 3000;
console.info("Initializing Earth-Mars communication");

app.use(bodyParser.json());
app.use(messageLogger);
app.use(messageIntercept);

app.post("/api/earth-mars-comm/message", messageController);

app.listen(port, () => {
	console.info(
		`Earth-Mars 🌍 communication established at \nhttp://localhost:${port}`
	);
});
