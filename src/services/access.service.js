import shopModel from "../models/shop.model.js";
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const RoleShop = {
    SHOP: '001',
    WRITER: '002',
    EDITOR: '003',
    ADMIN: '004'
};

const signUp = async ({
    name, email, password
}) => {
    try {
        // Check email exists
        const holderShop = await shopModel.findOne({ email }).lean();

        if (holderShop) {
            return {
                code: 'xxx',
                message: 'Shop already registered!',
                status: 'error'
            }
        }

        // Hash password
        const passwordHash = await bcrypt.hash(password, 10)

        // Create new shop
        const newShop = await shopModel.create({
            name, 
            email, 
            password: passwordHash,
            roles: [RoleShop.SHOP]
        })

        if (newShop) {
            // created privateKey, publicKey
            const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
                modulusLength: 4096
            });

            console.log({privateKey, publicKey}); // Save collection KeyStore
        }
    } catch (error) {
        return {
            code: 'xxx',
            message: error.message,
            status: 'error'
        }
    }
}

export { signUp }