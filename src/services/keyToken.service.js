import keytokenModel from "../models/keytoken.model.js";

const createKeyToken = async ({ userId, publicKey }) => {
    try {
        const publicKeyString = publicKey.toString();
        const tokens = await keytokenModel.create({
            user: userId,
            publicKey: publicKeyString
        });

        return tokens ? tokens.publicKey : null
    } catch (error) {
        return error;
    }
}

export { createKeyToken }