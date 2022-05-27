import Rate from "../models/rate.model.js"


export const create = async(body) => {
    const data = Rate.create({...body})
    return data  
}

export const findByBase = async(base) => {
    const data = Rate.findOne({...base})
    return data  
}