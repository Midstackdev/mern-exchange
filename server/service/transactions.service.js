import Transaction from "../models/transaction.model.js"


export const create = async(body) => { 
    return Transaction.create({...body})
}

export const getAll = async(params) => {
    // console.log(params)
    let query;
    
    if(params.to || params.from || params.type && params.type !== 'all') {
        if(params.to && params.from && params.type) {
            query = Transaction.find({
                createdAt: {$gte: new Date(params.from), $lte: new Date(params.to)},
                type: params.type
            })
        }
        
        if(params.to && params.from && !params.type) {
            query = Transaction.find({
                createdAt: {$gte: new Date(params.from), $lte: new Date(params.to)}
            })
        }

        if(!params.to || !params.from && params.type) {
            query = Transaction.find({type: params.type})
        }

    }else {
        query = Transaction.find({})
    }
    
    
    
    const {data, pagination } = await query.sort({'createdAt': 'desc'})
    .paginate({ page: params.page })

    return {data, meta: pagination}
}

export const findById = async(id) => {
    return Transaction.findById(id)
}

export const findOne = async(query) => {
    return Transaction.findOne({...query})
}