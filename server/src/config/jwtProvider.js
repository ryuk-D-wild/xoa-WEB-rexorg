const jwt = require("jsonwebtoken")

const SECRET_KEY = "evfeikugciciuytdytdyjtd5ve6k875ve65ev75e6vv6ejudeydt "

const generateToken = (userId) => {
    const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: "48h" })
    return token;
}

const getUserIdFromToken = (token) => {
    const decodedToken = jwt.verify(token, SECRET_KEY)
    return decodedToken.userId;
}

module.exports = { generateToken, getUserIdFromToken }