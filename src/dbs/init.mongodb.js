import mongoose from 'mongoose';
import { countConnect } from '../helpers/check.connect.js';
import config from '../configs/config.mongodb.js';


const connectString = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;
const MAX_POOL_SIZE = 50;

class Database {
    
    constructor() {
        this.connect();
    }

    // Connect
    connect(type = 'mongodb') {
        if ( 1 === 1 ) {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }

        mongoose.connect(connectString, {
            maxPoolSize: MAX_POOL_SIZE
        })
        .then(_ => {
            console.log(`Connected Mongodb success Pro`);
            countConnect();
        })
        .catch(err => console.log(`Error Connect!`));
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();

export default instanceMongodb;

