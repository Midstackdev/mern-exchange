import mongoose from 'mongoose'

const { model, Schema } = mongoose

const transactionSchema = new Schema({
  currencyFrom: { type: String },
  amountFrom: { type: Number },
  currencyTo: { type: String },
  amountTo: { type: Number },
  type: { type: String }
}, 
{
    timestamps: true
})

export default model('Transaction', transactionSchema)