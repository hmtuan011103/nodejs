const signUp = async (req, res, next) => {
    try {
        console.log(`[P]::signUp::`, req.body);
        return res.status(201).json({
            code: '2001',
            metadata: {userId: 1}
        });
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

export { signUp, signIn, logout}