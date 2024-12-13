import mongoose from 'mongoose';

const connectString = `mongodb://localhost:27017/shopDev`;

mongoose.connect(connectString)
.then(_ => console.log(`Connected Mongodb success`))
.catch( err => console.log(`Error Connect!`));

// Dev
if ( 1 === 1 ) {
    mongoose.set('debug', true);
    mongoose.set('debug', { color: true });
}

export default mongoose;
