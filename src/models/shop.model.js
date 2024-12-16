import { model, Schema } from 'mongoose';

const DOCUMENT_NAME = 'Shop';;
const COLLECTION_NAME = 'Shops';

// Declare the Schema of the Mongo model
const shopSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true,
        maxLength: 150
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        minLength: 6,
        select: false
    },
    status:{
        type: String,
        enum: ['active','inactive'],
        default: 'inactive'
    },
    verify: {
        type: Boolean,
        default: false
    },
    roles:{
        type: Array,
        default: []
    }
}, {
    timestamps: true,
    collection: COLLECTION_NAME
});

shopSchema.index({ email: 1, name: 1 })

// Export the model
export default model(DOCUMENT_NAME, shopSchema);