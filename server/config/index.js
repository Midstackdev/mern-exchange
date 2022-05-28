import dotenv from 'dotenv';

dotenv.config();

const {
    PORT,
    NODE_ENV,
    CONNECTION_URI,
    BCRYPT_PEPPER,
    X_RAPID_API_HOST,
    X_RAPID_API_KEY,
    X_COIN_API_KEY,
    PAGINATE_DEFAULT_LIMIT,
} = process.env;

export default {
    port: PORT || 5000,
    mongoUri: CONNECTION_URI,
    pepper: BCRYPT_PEPPER,
    rapidApiHost: X_RAPID_API_HOST,
    rapidApiKey: X_RAPID_API_KEY,
    coinApiKey: X_COIN_API_KEY,
    paginateLimit: PAGINATE_DEFAULT_LIMIT,
}

export const port = PORT
export const coinApiKey = X_COIN_API_KEY
export const paginateLimit = parseInt(PAGINATE_DEFAULT_LIMIT)