import mongoose from 'mongoose'
import { paginateLimit } from '../config/index.js'
import { PaginatePlugin } from '../lib/paginate.js'

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

// Load paginate plugin on transaction schema
transactionSchema.plugin(PaginatePlugin, { limit: paginateLimit })

export default model('Transaction', transactionSchema)