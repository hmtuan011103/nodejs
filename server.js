import app from "./src/app.js";

const PORT = 3055;

const server = app.listen(PORT, () => console.log(`WSV Ecommerce start with port ${PORT}`));

process.on('SIGINT', () => {
    server.close( () => console.log(`Exit server express with port ${PORT}`) );
});