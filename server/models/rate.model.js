import mongoose from 'mongoose'

const { model, Schema } = mongoose

const rateSchema = new Schema({
  base: { type: String, unique: true },
  rates: { type: Array },
  timeAt: { type: String },
}, 
{
    timestamps: true
})

export default model('Rate', rateSchema)