import Rate from "../models/rate.model.js"

// creates a rate in the db
export const create = async(body) => {
    return Rate.create({...body})
}

// find a rate by the base currency
export const findByBase = async(base) => { 
    return Rate.findOne().where('base').equals(base)
}

// updates rates or creates a rate in the db when not found 
export const update = async(base, data) => {
    return Rate
    .findOneAndUpdate({'base': base},{$set: {rates: data.rates}}, { upsert: true, new: true })
        .exec()
}