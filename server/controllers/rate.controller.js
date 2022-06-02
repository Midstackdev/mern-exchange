import { findByBase } from "../service/rates.service.js"

// shows a rates for a particular currency passed to the query params
export const show = async (req, res, next) => {
    const { base } = req.params
    // console.log(base)
    try {
        const data = await findByBase(base)
        // console.log(data)
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}