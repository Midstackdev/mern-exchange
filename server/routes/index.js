import transactionRoutes from './transactions.routes.js'

export const registerRoutes = (app) => {
    app.use('/api/transaction', transactionRoutes)
}