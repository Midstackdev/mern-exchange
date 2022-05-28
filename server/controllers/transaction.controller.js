import { create, findById, getAll } from "../service/transactions.service.js"


export const store = async(req, res, next) => {
    try {
        const data = await create(req.body)
        res.status(201).json(data)
    } catch (error) {
        next(error)
    }
}

export const index = async(req, res, next) => {
    const { page } = req.query
    try {
        const data = await getAll(page)
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}

export const show = async(req, res, next) => {
    const { id } = req.params
    try {
        const data = await findById(id)
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}