import jwt from 'jsonwebtoken'

export const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.NEXT_APP_ACCESS_TOKEN_SECRET, {expiresIn: '8h'})
}

export const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.NEXT_APP_REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}