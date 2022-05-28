import Rate from "../models/rate.model.js"


export const create = async(body) => {
    return Rate.create({...body})
}

export const findByBase = async(base) => { 
    return Rate.findOne({...base})
}