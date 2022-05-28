import Transaction from "../models/transaction.model.js"


export const create = async(body) => { 
    return Transaction.create({...body})
}

export const getAll = async(page) => {
    const {data, pagination } = await Transaction.find({}).paginate({ page: page })
    return {data, meta: pagination}
}

export const findById = async(id) => {
    return Transaction.findById(id)
}

export const findOne = async(query) => {
    return Transaction.findOne({...query})
}