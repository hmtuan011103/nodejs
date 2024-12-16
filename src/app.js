// ES modules (ES6+)
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import mongoose from "./dbs/init.mongodb.js"
import { checkOverload } from "./helpers/check.connect.js";
import router from "./routes/index.js";

const app = express();

 
// Init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// Init database;
// checkOverload();

// Init routes
app.use('/', router);

// Handle errors

export default app;