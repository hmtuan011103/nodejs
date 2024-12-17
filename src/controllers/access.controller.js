import * as AccessService from "../services/access.service.js";

const signUp = async (req, res, next) => {
    try {
        console.log(`[P]::signUp::`, req.body);
        return res.status(201).json(
            await AccessService.signUp(req.body)
        );
    } catch (error) {
        next(error);
    }
}

const signIn = async (req, res, next) => {
    // logic here
}

const logout = async (req, res, next) => {
    // logic here
}

export { signUp, signIn, logout};