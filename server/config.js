import dotenv from 'dotenv';

dotenv.config();

const {
    PORT,
    NODE_ENV,
    CONNECTION_URI,
    BCRYPT_PEPPER,
    X_RAPID_API_HOST,
    X_RAPID_API_KEY,
} = process.env;

export default {
    port: PORT || 5000,
    mongoUri: CONNECTION_URI,
    pepper: BCRYPT_PEPPER,
    rapidApiHost: X_RAPID_API_HOST,
    rapidApiKey: X_RAPID_API_KEY,
}

export const port = PORT