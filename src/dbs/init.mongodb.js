import mongoose from 'mongoose';

const connectString = `mongodb://localhost:27017/shopDev`;

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

        mongoose.connect(connectString)
        .then( _ => console.log(`Connected Mongodb success Pro`) )
        .catch( err => console.log(`Error Connect!`) );
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

