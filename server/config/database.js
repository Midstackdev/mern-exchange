import mongoose from "mongoose";
import config from './index.js'

/**
 * Creating a connecion to mongoDB Server
 * @returns A mongoDb connection Instance
 */
 const connectToDB = async() => {

    try {
        const connect = await  mongoose.connect(config.mongoUri)
        console.info('mongo connected');
        return connect
    } catch (error) {
        console.info('mongo error', error);
        process.exit(1);
    }
}

export default connectToDB;