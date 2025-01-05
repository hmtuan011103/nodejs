import { model, Schema } from 'mongoose';

const DOCUMENT_NAME = 'Key';;
const COLLECTION_NAME = 'Keys';

// Declare the Schema of the Mongo model
const keyTokenSchema = new Schema({
    // Add private for basic new key
    user:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Shop'
    },
    privateKey:{
        type: String,
        required: true,
        trim: true,
    },
    publicKey:{
        type: String,
        required: true,
        trim: true,
    },
    refreshToken:{
        type: Array,
        default: [],
    },
}, {
    timestamps: true,
    collection: COLLECTION_NAME
});

// Export the model
export default model(DOCUMENT_NAME, keyTokenSchema);