import mongoose from 'mongoose';
import os from 'os';
import process from 'process';

const _SECONDS = 5000;
const _KB = 1024;

// Count connect
const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log(`Number of connection: ${numConnection}`);
}

// Check overload connect
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;
        
        // Example maximum number of connections based on number of cores
        const maxConnections = numCores * 5;

        console.log(`-------------`);
        console.log(`Active connections: ${numConnection}`);
        console.log(`Memory usage: ${memoryUsage / _KB / _KB} MB`);

        if (numConnection > maxConnections) {
            console.log(`Connection overload detected!`);
            // notify.send(...);
        }

    }, _SECONDS); // Monitor every 5 seconds
}

export {
    countConnect,
    checkOverload
};