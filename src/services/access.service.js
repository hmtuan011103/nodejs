import shopModel from "../models/shop.model.js";
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import * as KeyTokenService from "./keyToken.service.js";
import { createTokenPair } from "../auth/authUtils.js";
import { getInfoData } from "../utils/index.js";

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
                modulusLength: 4096,
                publicKeyEncoding: {
                    type: 'pkcs1', // Public Key Crypto Graphy Standards
                    format: 'pem'
                },
                privateKeyEncoding: {
                    type: 'pkcs1',
                    format: 'pem'
                }
            });

            console.log({privateKey, publicKey}); // Save collection KeyStore

            const publicKeyString = await KeyTokenService.createKeyToken({
                userId: newShop._id,
                publicKey
            });

            if (!publicKeyString) {
                return {
                    code: 'xxx',
                    message: 'publicKeyString error',
                }
            }

            console.log(`publicKeyString::`, publicKeyString);
            
            const publicKeyObject = crypto.createPublicKey(publicKeyString);

            console.log(`publicKeyObject::`, publicKeyObject);

            // created token pair
            const tokens = await createTokenPair({
                userId: newShop._id,
                email
            }, publicKeyString, privateKey);

            console.log(`Created token success::`, tokens);

            return {
                code: 201,
                metadata: {
                    shop: getInfoData({ 
                        fileds: ['_id', 'name', 'email'],
                        object: newShop
                    }),
                    tokens
                }
            };
        }

        return {
            code: 200,
            metadata: null
        };
    } catch (error) {
        return {
            code: 'xxx',
            message: error.message,
            status: 'error'
        }
    }
}

export { signUp }