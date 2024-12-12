// ES modules (ES6+)
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";

const app = express();


// Init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// Init database

// Init routes
app.get('/', (req, res, next) => {
    const strCompress = 'Hello Fantipjs';
    return res.status(200).json({
        message: 'Welcome Fantipjs',
        metadata: strCompress.repeat(100000)
    });
});

// Handle errors

export default app;